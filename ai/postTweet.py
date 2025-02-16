from requests_oauthlib import OAuth1Session
import os
from database import fetchAuth
from dotenv import load_dotenv

def postTweet():
    
    load_dotenv()
    consumer_key = os.environ.get("CONSUMER_KEY")
    consumer_secret = os.environ.get("CONSUMER_SECRET")

    access_token, access_secret = fetchAuth(1)

    oauth = OAuth1Session(
        consumer_key,
        client_secret=consumer_secret,
        resource_owner_key=access_token,
        resource_owner_secret=access_secret,
    )

    payload = {"text": "Feeling Silly today haha, might delete later"}

    response = oauth.post(
        "https://api.twitter.com/2/tweets",
        json=payload,
    )

    if response.status_code != 201:
        raise Exception(
            "Request returned an error: {} {}".format(response.status_code, response.text)
        )
    
postTweet()