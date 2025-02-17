from secret_ai_sdk.secret_ai import ChatSecret
from secret_ai_sdk.secret import Secret
import re

class Generation():

    def __init__(self):

        self.secret_client = Secret()
        self.models = self.secret_client.get_models()
        self.urls = self.secret_client.get_urls(model=self.models[0])
        self.secret_ai_llm = ChatSecret(
            base_url=self.urls[0],
            model=self.models[0],
            temperature=1.0
        )
        
    def generateTweet(self):

        messages = [
            ("system", "I have a new meme coin called GoonCoin. I want you to create a tweet to promote it. Include hashtags like a real tweet. Your generated text will be literally copied into a tweet, don't have '**' or any style imitations. This is not a joke coin, we must convince people to buy it. Keep the tweet short and whitty. Its not an introduction, this is an ongoing promotion of Goon Coin. Do not mention how 'this is funny', this is serious. Do not wrap in quotes. Can be midly innapropriate."),
        ]

        raw_response = self.secret_ai_llm.invoke(messages, stream=False)
        match = re.search(r"</think>\s*(.*)", raw_response.content)
        tweet = match.group(1).strip('"') if match else ""
        return tweet