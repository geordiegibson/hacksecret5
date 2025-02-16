import os
from dotenv import load_dotenv
from fastapi import FastAPI
from requests_oauthlib import OAuth1Session
import sqlite3

app = FastAPI()

@app.get("/oauth/request")
async def root():

    load_dotenv()
    consumer_key = os.environ.get("CONSUMER_KEY")
    consumer_secret = os.environ.get("CONSUMER_SECRET")
    
    request_token_url = "https://api.twitter.com/oauth/request_token?oauth_callback=oob&x_auth_access_type=write"
    oauth = OAuth1Session(consumer_key, client_secret=consumer_secret)

    fetch_response = oauth.fetch_request_token(request_token_url)
    
    resource_owner_key = fetch_response.get("oauth_token")
    resource_owner_secret = fetch_response.get("oauth_token_secret")

    return {"key": resource_owner_key, "secret": resource_owner_secret}

@app.get("/oauth/authorise")
async def root():

    load_dotenv()
    consumer_key = os.environ.get("CONSUMER_KEY")
    consumer_secret = os.environ.get("CONSUMER_SECRET")

    oauth = OAuth1Session(consumer_key, client_secret=consumer_secret)

    base_authorization_url = "https://api.twitter.com/oauth/authorize"
    authorization_url = oauth.authorization_url(base_authorization_url)
    print("Please go here and authorize: %s" % authorization_url)
    verifier = input("Paste the PIN here: ")
    return {"message": "Hello World"}

@app.get("/oauth/access-token")
async def root(resource_owner_key, resource_owner_secret, verifier):

    load_dotenv()
    consumer_key = os.environ.get("CONSUMER_KEY")
    consumer_secret = os.environ.get("CONSUMER_SECRET")

    access_token_url = "https://api.twitter.com/oauth/access_token"
    oauth = OAuth1Session(
        consumer_key,
        client_secret=consumer_secret,
        resource_owner_key=resource_owner_key,
        resource_owner_secret=resource_owner_secret,
        verifier=verifier,
    )
    oauth_tokens = oauth.fetch_access_token(access_token_url)

    access_token = oauth_tokens["oauth_token"]
    access_token_secret = oauth_tokens["oauth_token_secret"]

    return {"token": access_token}

@app.get("/oauth/request")
async def root():
    return {"message": "Hello World"}