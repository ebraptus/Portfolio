# John DeShano Portfolio
This is the base configuration for my website and everything that I used to get it up and running

## General
### Languages
* HTML
* CSS [LESS PreProcessor]
* JavaScript
* Python

### Build With
* [NGINX](https://www.nginx.com/) - Used for serving the web pages
* [Django](https://www.djangoproject.com/) - The Web Framework
* [Jinja2](http://jinja.pocoo.org/) - Page templating
* [uWSGI](https://uwsgi-docs.readthedocs.io/) - For deployment of the web server
* [Google Fonts](https://fonts.google.com/) - For font management
* [jQuery](https://jquery.com/) - JavaScript Library
* [Font Awesome](https://fontawesome.com/) - For the awesome icons

## Important Info
All setup here is based on the ubuntu file system

This isn't made to be the most easy to setup, this is all made for me and just showing off what I know how to do

## Basics
Website placed in
~~~
/var/www/Portfolio
~~~

## NGINX Configuration

Create a symbolic from:
~~~
/var/www/Portfolio/extra/portfolio
~~~

To:
~~~
/etc/nginx/sites-enabled/portfolio
~~~

## Systemd configuration file

Create a symbolic from:
~~~
/var/www/Portfolio/extra/portfolio.service
~~~

To:
~~~
/etc/systemd/system/portfolio.service
~~~

## Setup environment
~~~
sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get install -y git python build-essential uwsgi

git clone https://github.com/ebraptus/Portfolio.git /var/www/Portfolio

pip install virtualenv

virtualenv /var/www/Portfolio/env
source /var/www/Portfolio/env/Scripts/activate

python -m pip install pip --upgrade
python -m pip install django
python -m pip install uwsgi
~~~
