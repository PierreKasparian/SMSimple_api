from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import os
from twilio.rest import Client
import traceback
import stripe
import os
import bcrypt
from supabase import create_client as create_supabase_client, Client as SupabaseClient
load_dotenv()

url: str = os.environ.get("NEXT_PUBLIC_SUPABASE_URL")

key: str = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")
supabase: SupabaseClient = create_supabase_client(url, key)

# Stripe configuration
stripe.api_key = os.getenv('STRIPE_SECRET_KEY')
SITE_URL = os.getenv('SITE_URL')
# Twilio configuration
account_sid = os.getenv('TWILIO_SID')
auth_token = os.getenv('TWILIO_AUTH_TOK')
client = Client(account_sid, auth_token)

# Initialize FastAPI app
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=False,  # Disable credentials when using *
    allow_methods=["GET", "POST"],  # Only allow necessary methods
    allow_headers=[
        "Content-Type",
        "Authorization",  # For API key
        "X-API-Key"       # Alternative API key header
    ],
    expose_headers=[
        "X-Request-ID",
        "X-API-Version"
    ],
    max_age=600  # Cache preflight requests for 10 minutes
)


def send_SMS(client, message, to):

    message = client.messages.create(
        body=message,
        from_="+15865196045",
        to=to,
    )

    print(message)
    return message


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
        "user_id, api_key, credits"
    ).execute()
    # 2. Compare against each record securely
    for row in rows.data:
        try:
            if bcrypt.checkpw(provided_key.encode(), row['api_key'].encode()):
                # Return authenticated user
                return row['user_id'], row['credits']
        except ValueError:
            # Skip invalid hashes and continue checking other records
            continue

    return None  # No match found


class Item(BaseModel):
    to: str
    message: str
    apiKey: str


@app.post("/sms-api/sendsms/")
async def sendsms(item: Item):
    api_key = item.apiKey
    if not api_key:
        raise HTTPException(status_code=400, detail="Missing API key")
    if not item.to or not item.message:
        raise HTTPException(
            status_code=400, detail="Missing \"to\" or \"message\" required fields")

    user_id, credits = authenticate_user(api_key)

    if not user_id:
        raise HTTPException(status_code=403, detail="Unvalid API key")

    if credits <= 0:
        raise HTTPException(status_code=403, detail="Insufficient credits")
    # Deduct 1 credit
    supabase.table("API_KEY").update(
        {"credits": credits - 1}).eq("user_id", user_id).execute()

    try:
        ans = send_SMS(client=client, message=item.message, to=item.to)
        response_sms = {
            "body": ans.body,
            "status": ans.status
        }
    except Exception as e:
        print("An error occurred:", e)
        traceback.print_exc()
        raise HTTPException(
            status_code=500, detail="An error occured sending the SMS")
    return {"response": response_sms}


@app.get("/sms-api/healthcheck")
async def healthcheck():
    print('healthcheck')
    return "API working"


# @app.post("/sms-api/webhook")
# async def stripe_webhook(request: Request):
#     payload = await request.body()
#     sig_header = request.headers.get('stripe-signature')
#     print('in the webhook')
#     try:
#         event = stripe.Webhook.construct_event(
#             payload, sig_header, webhook_secret
#         )
#     except ValueError as e:
#         return {"error": "Invalid payload"}, 400
#     except stripe.error.SignatureVerificationError as e:
#         return {"error": "Invalid signature"}, 400

#     if event['type'] == 'checkout.session.completed':
#         print(event['data'])
#         session = event['data']['object']
#         customer_id = session.customer
#         subscription_id = session.subscription

#         subscription = stripe.Subscription.retrieve(subscription_id)
#         print('subscription')
#         item_id = subscription["items"]["data"][0]['id']

#         # Generate API key
#         api_key_data = generate_api_key()
#         print(api_key_data)
#         # Get user from supabase

#         try:
#             # PLUTOT FAIRE UN UPDATE ICI pour ajouter item_id et customer_id
#             url = SITE_URL+"intern_api/"
#             payload = {
#                 "customer_id": customer_id,
#                 "item_id": item_id
#             }

#             headers = {
#                 "Content-Type": "application/json",
#                 "Accept": "application/json"
#             }

#     # Version avec vérification détaillée
#             response = requests.post(url, json=payload, headers=headers)
#             if (response.status_code != 200):
#                 print("Failed to store API key")
#                 return {"error": "Failed to store API key"}, 500
#         except Exception as e:
#             print(e)
#             traceback.print_exc()
#             return {"error": "Failed to store API key"}, 500
#         print(f"Customer {customer_id} subscribed to plan {subscription_id}")
#     return {"status": "success"}


# @app.get("/sms-api/usage/{customer_id}")
# async def get_usage(customer_id: str):
#     try:
#         invoice = stripe.Invoice.upcoming(
#             customer=customer_id
#         )
#         return invoice
#     except Exception as e:
#         return {"error": str(e)}, 500
