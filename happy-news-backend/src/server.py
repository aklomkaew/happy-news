from flask import Flask, request

app = Flask(__name__)

users = []

# HomePage
@app.route("/")
def hello():
    return "hello\n"

@app.route("/login", methods=["POST"])
def login():
    username = request.json['username']
    if username in users:
        abort(401)
    else:
        users.append(username)
        return 'Successfully logged in'

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')