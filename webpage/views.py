from django.shortcuts import render
from django.http import HttpResponse

import re

from . import models

def home(request):
	return render(request, "webpage/home.html", {'title': "Home"})

def projects(request):
	return render(request, "webpage/projects.html", {'title': "Projects"})

def project_portfolio(request):
	return render(request, 'webpage/projects/portfolio.html', {'title': "Portfolio"})

def project_console(request):
	return render(request, 'webpage/projects/console.html', {'title': "Console Application"})

def project_kamshooter(request):
	return render(request, 'webpage/projects/kamshooter.html', {'title': "Kam Shooter"})

def project_maze(request):
	return render(request, 'webpage/projects/maze.html', {'title': "Dungeon Maze Game"})

def project_mtagsite(request):
	return render(request, 'webpage/projects/mtagsite.html', {'title': "MTAG Website"})

def skills(request):
	return render(request, "webpage/skills.html", {'title': "Skills"})

def languages(request):
	return render(request, "webpage/languages.html", {'title': "Languages"})

def toolset(request):
	return render(request, "webpage/toolset.html", {'title': "Toolset"})

def education(request):
	return render(request, "webpage/education.html", {'title': "Education"})

def contact(request):
	if request.method == "GET":
		return render(request, "webpage/contact.html", {'title': "Contact"})
	elif request.method == "POST":
		name = request.POST["name"]
		email = request.POST["email"]
		message = request.POST["message"]

		if name == "" or email == "" or message == "":
			return HttpResponse("1")

		newMessage = models.Message(name=name, email=email, message=message)
		newMessage.save()
		return HttpResponse("0")


