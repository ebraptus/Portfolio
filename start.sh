#!/bin/bash
cd /var/www/Portfolio
source ./env/bin/activate
python manage.py collectstatic --noinput
uwsgi --ini portfolio.ini

