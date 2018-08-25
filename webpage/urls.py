from django.conf.urls import url, include

from . import views

urlpatterns = [
	url(r'^$', views.home),
	url(r'^home/$', views.home),
	url(r'^projects/$', views.projects),
	url(r'^skills/$', views.skills),
	url(r'^languages/$', views.languages),
	url(r'^toolset/$', views.toolset),
	url(r'^education/$', views.education),
	url(r'^contact/$', views.contact),
	url(r'^projects/portfolio/$', views.project_portfolio),
	url(r'^projects/console/$', views.project_console),
	url(r'^projects/kamshooter/$', views.project_kamshooter),
	url(r'^projects/maze/$', views.project_maze),
	url(r'^projects/mtagsite/$', views.project_mtagsite),
]
