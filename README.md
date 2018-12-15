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

## Basics
Website placed in
~~~
/var/www/Portfolio
~~~

## NGINX Configuration

Directory:
~~~
/etc/nginx/sites-available/portfolio
~~~

Contents:
~~~
# HTTP Redirect to HTTPS
server{
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name johndeshano.me www.johndeshano.me;
    return 301 https://$host$request_uri;
}

# HTTPS / Main Configuration
server{
    listen 443 http2 ssl default_server;
    listen [::]:443 http2 ssl default_server;
    server_name johndeshano.me www.johndeshano.me;

    ssl on;
    ssl_certificate /etc/letsencrypt/live/johndeshano.me/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/johndeshano.me/privkey.pem;

    gzip on;
    gzip_min_length 1000;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain text/css image/jpeg application/javascript application/xml;

    location / {
        include uwsgi_params;
        uwsgi_pass unix:///tmp/portfolio.sock;
    }

    location /static/ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
        alias /var/www/Portfolio/static/;
    }
}
~~~

## Systemd configuration file

Directory:
~~~
/etc/systemd/system/portfolio.service
~~~

Contents:
~~~
[Unit]
Description=uWSGI instance to serve portfolio
After=syslog.target

[Service]
ExecStart=/var/www/Portfolio/start.sh
KillSignal=SIGQUIT
Restart=always
Type=notify
StandardError=syslog
NotifyAccess=all

[Install]
WantedBy=multi-user.target
~~~