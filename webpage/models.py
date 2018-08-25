from django.db import models

class Message(models.Model):
	name = models.CharField(max_length=255, blank=False, null=False)
	email = models.CharField(max_length=255, blank=False, null=False)
	message = models.TextField(blank=False, null=False)

	def __str__(self):
		return self.name

	def __repr__(self):
		return "<MESSAGE '{}'".format(self.name)
