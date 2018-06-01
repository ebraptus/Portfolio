from flask import Blueprint, render_template

cdn = Blueprint("CDN", __name__, template_folder="templates", static_folder="static", static_url_path="/static/cdn/")

@cdn.route("/")
def home():
    return render_template("home.html")