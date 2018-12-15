#!/bin/bash
cd /var/www/Portfolio/
source ./env/bin/activate
uwsgi --ini portfolio.ini
