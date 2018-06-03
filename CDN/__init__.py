from flask import Blueprint, render_template, url_for

cdn = Blueprint("cdn", __name__, template_folder="templates", static_folder="static", static_url_path="")

@cdn.route("/")
def home():
    return render_template("cdn/home.html")

@cdn.route('/test/')
def test():
    return url_for(".static", filename="test.txt")