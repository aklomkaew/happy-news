import boto3
import json

comprehend = boto3.client(service_name='comprehend', region_name='us-west-2')
                
text = "It is raining today in Seattle"

print('Calling DetectSentiment')
print(json.dumps(comprehend.detect_sentiment(Text=text, LanguageCode='en'), sort_keys=True, indent=4))
print('End of DetectSentiment\n')



# aws comprehend detect-sentiment \
#     --region "us-west-2" \
#     --language-code "en" \
#     --text "It is raining today in Seattle."