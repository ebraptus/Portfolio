# John de Shano Portfolio

This is my portfolio, you have found the source!

I made this just to show off my skills. But here is where all the information is kept

## Deployment

I used UWSGI NGINX and Python Flask to deploy this

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
```uwsgi --ini portfolio.ini```

## Built With
* [NGINX](https://www.nginx.com/)
* [uWSGI](https://uwsgi-docs.readthedocs.io/en/latest/)
* [Python Flask](http://flask.pocoo.org/)
* [Jinja2](http://jinja.pocoo.org/)
* [jQuery](http://jquery.com/)
* [Google Fonts](https://fonts.google.com/)
* [Font Awesome](https://fontawesome.com/)
* [Sweet Alerts 2](https://sweetalert2.github.io/)
