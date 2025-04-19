from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import os
from twilio.rest import Client
import traceback
import os
import bcrypt
from supabase import create_client as create_supabase_client, Client as SupabaseClient
from fastapi import FastAPI, HTTPException, Depends, Header  # Added Depends and Header

load_dotenv()

url: str = os.environ.get("NEXT_PUBLIC_SUPABASE_URL")

key: str = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")
supabase: SupabaseClient = create_supabase_client(url, key)

# Twilio configuration
account_sid = os.getenv('TWILIO_SID')
auth_token = os.getenv('TWILIO_AUTH_TOK')
client = Client(account_sid, auth_token)

# Initialize FastAPI app
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # À remplacer par vos domaines en prod
    allow_credentials=False,
    allow_methods=["GET", "POST", "OPTIONS"],  # Explicitement listés
    allow_headers=["*"],
    expose_headers=["*"],
    max_age=600 # Cache preflight requests for 10 minutes
)


def send_SMS(client, message, to):

    message = client.messages.create(
        body=message,
        from_="+15865196045",
        to=to,
    )

    print(message)
    return message

COUNTRIES = os.getenv('COUNTRIES_CREDITS_PER_SMS')

import json
COUNTRIES = json.loads(COUNTRIES)
import phonenumbers

def get_phone_region_code(phone_number, default_region=None):
    """
    Get the region code (country code) associated with a phone number using libphonenumber.
    
    Args:
        phone_number (str): The phone number to analyze
        default_region (str, optional): Default region code if number lacks country code (e.g., 'US', 'GB')
    
    Returns:
        str: The region code (e.g., 'US', 'GB') or None if couldn't determine
    """
    try:
        parsed_number = phonenumbers.parse(phone_number, default_region)
        return phonenumbers.region_code_for_number(parsed_number)
    except phonenumbers.phonenumberutil.NumberParseException:
        return None

def get_credits_for_region(region_code):
    """
    Get the number of credits associated with a region code based on the countries list.
    
    Args:
        region_code (str): The region code (e.g., 'US', 'GB')
        countries_list (list): List of country objects with code and creditsPerSMS
    
    Returns:
        int: The number of credits for the region, or default if region not found
    """
    # Find the country in the list that matches the region code
    country = next((c for c in COUNTRIES if c['code'] == region_code), None)
    if country:
        return country['creditsPerSMS']
    raise HTTPException(status_code=400, detail="Could not determine region for phone number. See available regions here : https://smsimple-api.vercel.app/regions")

def get_substract_creds(phone_number):
    region = get_phone_region_code(phone_number)
    if region:
        credits = get_credits_for_region(region)
        print(f"Region: {region}, Credits: {credits}")
        return credits
    else:
        print("Could not determine region for phone number")
        raise HTTPException(status_code=400, detail="Could not determine region for phone number. See available regions here : https://smsimple-api.vercel.app/regions")
def buy_phone_numbr(client):
    country_code = 'US'

    # Recherche de numéros de téléphone locaux disponibles
    available_numbers = client.available_phone_numbers(
        country_code).local.list(limit=1)
    print(available_numbers)
    if available_numbers:
        first_number = available_numbers[0].phone_number
        # Achat du premier numéro disponible
        purchased_number = client.incoming_phone_numbers.create(
            phone_number=first_number)
        print(f"Numéro acheté avec succès : {purchased_number.phone_number}")
    else:
        print("Aucun numéro disponible trouvé.")

# Définir un modèle de données pour la requête POST


def authenticate_user(provided_key: str):
    # 1. Fetch ALL hashed API keys from DB (or batch if too many)
    rows = supabase.table("API_KEY").select(
        "user_id, api_key, credits,used_credits"
    ).execute()
    # 2. Compare against each record securely
    for row in rows.data:
        try:
            if bcrypt.checkpw(provided_key.encode(), row['api_key'].encode()):
                # Return authenticated user
                return row['user_id'], row['credits'],row['used_credits']
        except ValueError:
            # Skip invalid hashes and continue checking other records
            continue

    return None,None  # No match found



# Remove the apiKey from the Item model
class Item(BaseModel):
    to: str | None = None
    message: str | None = None

# Add this new dependency to extract the API key from the Authorization header
async def get_api_key(authorization: str = Header(None)):
    if not authorization:
        raise HTTPException(status_code=401, detail="Missing Authorization header")
    scheme, _, api_key = authorization.partition(' ')
    if scheme.lower() != 'bearer':
        raise HTTPException(status_code=401, detail="Invalid authentication scheme")
    return api_key

# Update the sendsms route to use the dependency
@app.post("/sms-api/sendsms") 
async def sendsms(item: Item, api_key: str = Depends(get_api_key)):  # Add dependency here
    # No need to check for api_key presence here since the dependency handles it
    if not item.to or not item.message:
        raise HTTPException(
            status_code=400, detail="Missing \"to\" or \"message\" required fields")

    user_id, credits,used_credits = authenticate_user(api_key)  # Use the api_key from the dependency

    if not user_id:
        raise HTTPException(status_code=403, detail="Invalid API key")
    substract_creds = get_substract_creds(item.to)
    print(f"Substract credits: {substract_creds}")
    if (credits-substract_creds) < 0:
        raise HTTPException(status_code=403, detail="Insufficient credits. If your number of credits is below 8, please see here pricing per countries : https://smsimple-api.vercel.app/regions")
    
    try:
        
        supabase.table("API_KEY").update(
            {"credits": credits - substract_creds,"used_credits": used_credits + substract_creds}).eq("user_id", user_id).execute()
    except:
        print("Error updating credits:")
        traceback.print_exc()
        raise HTTPException(status_code=500, detail="Failed to update credits. SMS not sent")
    try:
        ans = send_SMS(client=client, message=item.message, to=item.to)
        response_sms = {
            "body": ans.body,
            "status": ans.status
        }
    except:
        traceback.print_exc()
        try:
            supabase.table("API_KEY").update(
                {"credits": credits,"used_credits": used_credits}).eq("user_id", user_id).execute()
        except:
            print("An error occured refunding the credits : ")
            traceback.print_exc()
        raise HTTPException(
            status_code=500, detail="An error occured sending the SMS")

    return {"response":response_sms}
    
@app.get("/sms-api/healthcheck")
async def healthcheck():
    print('healthcheck')
    return "API working"