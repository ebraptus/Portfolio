from flask import Flask
from Portfolio import portfolio
from CDN import cdn

app = Flask(__name__)

app.config["SERVER_NAME"] = "local:2020"

app.register_blueprint(portfolio)
app.register_blueprint(cdn, subdomain="cdn")

if __name__ == "__main__":
	app.run(host="0.0.0.0", port="2020", debug=True)
