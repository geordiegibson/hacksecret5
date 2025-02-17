from apscheduler.schedulers.background import BackgroundScheduler
from datetime import datetime
import time
from dotenv import load_dotenv
from requests_oauthlib import OAuth1Session
from database import fetchAuthAccess
import os
import uuid

class Scheduler():

    _scheduler_instance = None

    def __init__(self):
        if Scheduler._scheduler_instance is None:

            self.scheduler = BackgroundScheduler()
            self.scheduler.start()
        else:
            self.scheduler = Scheduler._scheduler_instance

    
    def post_to_twitter(self):
        print(f"Posting to Twitter at {datetime.now()}")

        load_dotenv()
        consumer_key = os.environ.get("CONSUMER_KEY")
        consumer_secret = os.environ.get("CONSUMER_SECRET")

        access_token, access_secret = fetchAuthAccess(1)

        oauth = OAuth1Session(
            consumer_key,
            client_secret=consumer_secret,
            resource_owner_key=access_token,
            resource_owner_secret=access_secret,
        )

        # TODO: Replace with AI Generated tweet content
        random_id = uuid.uuid4()
        payload = {"text": "Feeling Silly today haha, might delete later " + str(random_id)}

        response = oauth.post(
            "https://api.twitter.com/2/tweets",
            json=payload,
        )

        if response.status_code != 201:
            raise Exception(
                "Request returned an error: {} {}".format(response.status_code, response.text)
            )

    def post_to_instagram(self):
        print(f"Posting to Instagram at {datetime.now()}")

    def post_to_tiktok(self):
        print(f"Posting to Tik Tok at {datetime.now()}")

    def scheduleJob(self):
        self.scheduler.add_job(self.post_to_twitter, 'interval', minutes=0.1)
