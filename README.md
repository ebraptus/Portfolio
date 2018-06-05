# John de Shano Portfolio

This is my portfolio, you have found the source!

I made this just to show off my skills. But here is where all the information is kept

## Deployment

Installing the required packages

`sudo apt-get build-essential python python-dev`

Installing pip requirements

`pip install -r requirements.txt`

NGINX site config:

```
server{ 
	listen 80; 
	server_name johndeshano.me; 

	location / { 
		include uwsgi_params; 
		uwsgi_pass unix:///tmp/portfolio.sock; 
	} 
}
```

Running the UWSGI Server:

`uwsgi --ini portfolio.ini`

## Built With

* [NGINX](https://www.nginx.com/) - Used to serve the website to the user
* [uWSGI](https://uwsgi-docs.readthedocs.io/en/latest/) - Used to link python flask to NGINX
* [Python Flask](http://flask.pocoo.org/) - Used to generate the data for the user
* [Jinja2](http://jinja.pocoo.org/) - Used to template all of the pages and put information in the page
* [jQuery](http://jquery.com/) - JavaScript library to make life easy
* [Google Fonts](https://fonts.google.com/) - Fonts supplied by google
* [Font Awesome](https://fontawesome.com/) - Sweet icons
* [Sweet Alerts 2](https://sweetalert2.github.io/) - Better alert boxes
