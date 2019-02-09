from django.conf.urls import url, include
from django.urls import path
from django.views.generic import TemplateView
from django.conf.urls import handler404, handler500


from . import views

urlpatterns = [
	path('robots.txt', TemplateView.as_view(template_name="robots.txt")),
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

handler404 = views.page404