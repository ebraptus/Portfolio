from django.conf.urls import url, include
from django.urls import path

from . import views

urlpatterns = [
	path('', views.home),
	path('home/', views.home),
	path('projects/', views.projects),
	path('skills/', views.skills),
	path('languages/', views.languages),
	path('toolset/', views.toolset),
	path('education/', views.education),
	path('contact/', views.contact),
	path('projects/portfolio/', views.project_portfolio),
	path('projects/console/', views.project_console),
	path('projects/kamshooter/', views.project_kamshooter),
	path('projects/maze/', views.project_maze),
	path('projects/mtagsite/', views.project_mtagsite),
]
