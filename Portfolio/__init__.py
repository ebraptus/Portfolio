from flask import Blueprint, render_template

portfolio = Blueprint("portfolio", __name__, template_folder="templates", static_folder="static", static_url_path="/static/portfolio")


@portfolio.route("/<path:invalid_path>/")
def handle_unmatchable(*args, **kwargs):
    return render_template('404.html', title="404"), 404

@portfolio.errorhandler(404)
def page_not_found(error):
	return render_template('404.html', title="404"), 404

@portfolio.route('/')
def home():
	return render_template('home.html', title="Home")

@portfolio.route('/projects/')
def projects():
	return render_template('projects.html', title="Projects")

@portfolio.route('/projects/portfolio/')
def project_portfolio():
	return render_template('projects/portfolio.html', title="Portfolio Website")

@portfolio.route('/projects/kamshooter/')
def project_kamshooter():
	return render_template('projects/kamshooter.html', title="Kam Shooter")

@portfolio.route('/projects/console/')
def project_console():
	return render_template('projects/console.html', title="Console")

@portfolio.route('/projects/maze/')
def project_maze():
	return render_template('projects/maze.html', title="Maze")

@portfolio.route('/projects/mtagsite/')
def project_mtagsite():
	return render_template('projects/mtagsite.html', title="MTAG Website")

@portfolio.route('/skills/')
def skills():
	return render_template('skills.html', title="Skills")

@portfolio.route('/languages/')
def languages():
	return render_template('languages.html', title="Languages")

@portfolio.route('/toolset/')
def toolset():
	return render_template('toolset.html', title="Toolset")

@portfolio.route('/education/')
def education():
	return render_template('education.html', title="Education")

@portfolio.route('/contact/')
def contact():
	return render_template('contact.html', title="Contact")
