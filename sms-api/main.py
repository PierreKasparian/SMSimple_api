from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import os
from twilio.rest import Client
import traceback
import stripe
import secrets
import hashlib
import os
from supabase import create_client as create_supabase_client, Client as SupabaseClient
load_dotenv()

url: str = os.environ.get("NEXT_PUBLIC_SUPABASE_URL")

key: str = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")
supabase: SupabaseClient = create_supabase_client(url, key)
# Load environment variables
# Stripe configuration
stripe.api_key = os.getenv('STRIPE_SECRET_KEY')
webhook_secret = os.getenv('STRIPE_WEBHOOK_SECRET')
SITE_URL = os.getenv('SITE_URL')
# Twilio configuration
account_sid = os.getenv('TWILIO_SID')
auth_token = os.getenv('TWILIO_AUTH_TOK')
client = Client(account_sid, auth_token)

# Initialize FastAPI app
app = FastAPI()


print("coucou les mecs")
# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Your Next.js frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def send_SMS(client, message, to):

    message = client.messages.create(
        body=message,
        from_="",  # "+15865196045",
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


class Item(BaseModel):
    to: str
    message: str
    apiKey: str


@app.post("/sms-api/sendsms/")
async def sendsms(item: Item):
    api_key = item.apiKey
    if not api_key:
        return {"error": "Missing API key"}, 400

    hashed_api_key = hash_api_key(api_key)
    response = supabase.table("API_KEY").select(
        "*").eq("api_key", hashed_api_key).execute()

    if not response.data:
        return {"error": "Unvalid API key"}, 403
    customer_id = response.data[0]['customer_id']
    item_id = response.data[0]['item_id']
    # customer = customers.get(customer_id)

    if not customer_id or not item_id:
        return {"error": "Unauthorized"}, 403

    # Record usage with Stripe Billing
    try:
        record = stripe.SubscriptionItem.create_usage_record(
            item_id,
            quantity=1,
            timestamp='now',
            action='increment'
        )
    except Exception as e:
        return {"error": str(e)}, 500
    if not item.to or not item.message:
        return {"response": "Missing required fields"}
    try:
        ans = send_SMS(client=client, message=item.message, to=item.to)
        response_data = {
            "body": ans.body,
            "status": ans.status
        }
    except Exception as e:
        print("An error occurred:", e)
        traceback.print_exc()
        return {"response": "An error occured"}
    return {"response": response_data}


@app.get("/sms-api/python")
async def healthcheck():
    print('coucou')
    return "API working"


# def generate_api_key():
#     api_key = secrets.token_hex(16)
#     hashed_api_key = hash_api_key(api_key)
#     return {"hashed_api_key": hashed_api_key, "api_key": api_key}


# def hash_api_key(api_key: str) -> str:
#     return hashlib.sha256(api_key.encode()).hexdigest()


# @app.post("/sms-api/checkout")
# async def create_checkout_session():
#     try:
#         session = stripe.checkout.Session.create(
#             mode='subscription',
#             payment_method_types=['card'],
#             line_items=[{
#                 'price': os.getenv('STRIPE_PRICE_ID'),
#             }],
#             success_url=SITE_URL+'dashboard?session_id={CHECKOUT_SESSION_ID}',
#             cancel_url=SITE_URL+'error',
#         )
#         return {"sessionId": session.id,
#                 "paymentUrl": session.url}
#     except Exception as e:
#         return {"error": str(e)}

# import requests

@app.post("/sms-api/webhook")
async def stripe_webhook(request: Request):
    payload = await request.body()
    sig_header = request.headers.get('stripe-signature')
    print('in the webhook')
    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, webhook_secret
        )
    except ValueError as e:
        return {"error": "Invalid payload"}, 400
    except stripe.error.SignatureVerificationError as e:
        return {"error": "Invalid signature"}, 400

    if event['type'] == 'checkout.session.completed':
        print(event['data'])
        session = event['data']['object']
        customer_id = session.customer
        subscription_id = session.subscription

        subscription = stripe.Subscription.retrieve(subscription_id)
        print('subscription')
        item_id = subscription["items"]["data"][0]['id']

        # Generate API key
        api_key_data = generate_api_key()
        print(api_key_data)
        # Get user from supabase

        try:
            # PLUTOT FAIRE UN UPDATE ICI pour ajouter item_id et customer_id
            url = SITE_URL+"intern_api/"
            payload = {
                "customer_id": customer_id,
                "item_id": item_id
            }

            headers = {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }

    # Version avec vérification détaillée
            response = requests.post(url, json=payload, headers=headers)
            if (response.status_code != 200):
                print("Failed to store API key")
                return {"error": "Failed to store API key"}, 500
        except Exception as e:
            print(e)
            traceback.print_exc()
            return {"error": "Failed to store API key"}, 500
        print(f"Customer {customer_id} subscribed to plan {subscription_id}")
    return {"status": "success"}




@app.get("/sms-api/usage/{customer_id}")
async def get_usage(customer_id: str):
    try:
        invoice = stripe.Invoice.upcoming(
            customer=customer_id
        )
        return invoice
    except Exception as e:
        return {"error": str(e)}, 500
