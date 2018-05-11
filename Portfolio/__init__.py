from flask import Flask, render_template

app = Flask(__name__)

@app.errorhandler(404)
def page_not_found(error):
	return render_template('404.html'), 404

@app.route('/')
def home():
	return render_template('home.html')

@app.route('/projects/')
def projects():
	return render_template('projects.html')

@app.route('/projects/portfolio/')
def project_portfolio():
	return render_template('projects/portfolio.html')

@app.route('/projects/kamshooter/')
def project_kamshooter():
	return render_template('projects/kamshooter.html')

@app.route('/projects/console/')
def project_console():
	return render_template('projects/console.html')

@app.route('/projects/maze/')
def project_maze():
	return render_template('projects/maze.html')

@app.route('/skills/')
def skills():
	return render_template('skills.html')

@app.route('/languages/')
def languages():
	return render_template('languages.html')

@app.route('/toolset/')
def toolset():
	return render_template('toolset.html')

@app.route('/education/')
def education():
	return render_template('education.html')

@app.route('/contact/')
def contact():
	return render_template('contact.html')