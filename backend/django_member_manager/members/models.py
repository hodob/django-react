from django.db import models


class Permission(models.Model):
	name = models.CharField(max_length=20)


class Member(models.Model):
	name = models.CharField(max_length=255)
	account = models.EmailField()
	password = models.CharField(max_length=20)
	permission = models.ForeignKey(Permission, on_delete=models.CASCADE)
#	createdAt = models.DateField("Created At", default='1999-11-11')
	createdAt = models.DateField("Created At", auto_now_add=True)


	def __str__(self):
		return self.name
