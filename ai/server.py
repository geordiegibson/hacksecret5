import os
from dotenv import load_dotenv
from fastapi import FastAPI
from requests_oauthlib import OAuth1Session
from database import databaseSetup, insertRequestInfo, insertAccessInfo, fetchAuthRequest, fetchAuthAccess
from fastapi.middleware.cors import CORSMiddleware
from scheduler import Scheduler

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

databaseSetup()


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

    insertRequestInfo(1, resource_owner_key, resource_owner_secret)

    base_authorization_url = "https://api.twitter.com/oauth/authorize"
    authorisation_url = oauth.authorization_url(base_authorization_url)

    return {"authorisation_url": authorisation_url}


@app.get("/oauth/access")
async def root(verifier):
    
    load_dotenv()
    consumer_key = os.environ.get("CONSUMER_KEY")
    consumer_secret = os.environ.get("CONSUMER_SECRET")

    request_token, request_secret = fetchAuthRequest(1)

    access_token_url = "https://api.twitter.com/oauth/access_token"
    oauth = OAuth1Session(
        consumer_key,
        client_secret=consumer_secret,
        resource_owner_key=request_token,
        resource_owner_secret=request_secret,
        verifier=verifier,
    )
    oauth_tokens = oauth.fetch_access_token(access_token_url)

    access_token = oauth_tokens["oauth_token"]
    access_token_secret = oauth_tokens["oauth_token_secret"]
    
    insertAccessInfo(1, access_token, access_token_secret)

    return {"token": access_token}


@app.get("/twitter/post")
async def root():
    scheduler = Scheduler()
    scheduler.scheduleJob()

@app.get("/health")
async def root():
    return {"message": "Hello World"}