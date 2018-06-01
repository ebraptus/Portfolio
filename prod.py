from flask import Flask
from Portfolio import portfolio
from CDN import cdn

app = Flask(__name__)
app.register_blueprint(portfolio)
app.register_blueprint(cdn)

if __name__ == "__main__":
	app.run(debug=True, host="0.0.0.0", port=2020)
