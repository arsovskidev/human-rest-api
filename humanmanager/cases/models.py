from django.db import models
from django.contrib.auth.models import User


class Case(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    message = models.CharField(max_length=100, blank=True)
    owner = models.ForeignKey(
        User, related_name="cases", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
