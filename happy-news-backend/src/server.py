from flask import Flask, request, abort, jsonify
import newspaper
from newspaper import Article

app = Flask(__name__)

articles = []

def getArticles(news_provider):
    papers = newspaper.build('https://' + news_provider + '.com')
    for a in papers.articles:
        articles.append({
            'title': a.title,
            'authors': a.authors,
            'publish_date': a.publish_date,
            'summary': a.summary,
            'url': a.url,
            'image': a.top_image,
            'text': a.text,
        })

@app.route("/scores", methods=["POST"])
def getScores():
    news_provider = request.json.get('news_provider', None)
    if news_provider is None:
        abort(401)
    else:
        getArticles(news_provider)
        return jsonify(articles)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')