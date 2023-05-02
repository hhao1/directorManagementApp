from django.db import models


class Employee(models.Model):
    first_name = models.TextField(null=True, blank=True)
    last_name = models.TextField(null=True, blank=True)
    title = models.TextField(null=True, blank=True)
    level = models.IntegerField(null=True, blank=True)
    photo = models.ImageField(null=True, blank=True)
    report_to = models.IntegerField(null=True, blank=True)

    def __str__(self):

        return self.first_name[0:20]
