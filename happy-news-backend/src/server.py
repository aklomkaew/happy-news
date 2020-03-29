from flask import Flask, request, abort, jsonify
import newspaper
from newspaper import Article
import boto3
import json

comprehend = boto3.client(service_name='comprehend', region_name='us-east-1')

app = Flask(__name__)

scraped_articles = []

def getArticles(news_provider):
    papers = newspaper.build('https://' + news_provider + '.com')
    for a in papers.articles:
        scraped_articles.append(a)

@app.route("/scores", methods=["POST"])
def getScores():
    news_provider = request.json.get('news_provider', None)
    if news_provider is None:
        abort(401)
    else:
        getArticles(news_provider)
        articles = []
        for a in scraped_articles:
            # make sure a.text is in valid format
            # score_data = json.loads(comprehend.detect_sentiment(Text=a.text, LanguageCode='en'), sort_keys=True, indent=4)
            articles.append({
                'title': a.title,
                'authors': a.authors,
                'publish_date': a.publish_date,
                'summary': a.summary,
                'url': a.url,
                'image': a.top_image,
                'text': a.text,
            #     'sentiment': score_data['Sentiment'],
            #     'positive': score_data['SentimentScore']['Positive'],
            #     'negative': score_data['SentimentScore']['Negative'],
            #     'neutral': score_data['SentimentScore']['Neutral']
            })
        return jsonify(articles)
            # if len(a.text) == 0:
            #     return jsonify("empty")
            # else:
            #     return json.dumps(comprehend.detect_sentiment(Text=a.text, LanguageCode='en'), sort_keys=True, indent=4)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')