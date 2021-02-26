from django.db import models
from django.contrib.auth.models import User
from django.core.validators import RegexValidator


class Case(models.Model):
    name = models.CharField(max_length=100)
    embg = models.CharField(
        max_length=13,
        validators=[RegexValidator(r'^\d{13,13}$')],
        unique=True
    )
    message = models.CharField(max_length=100, blank=True)
    owner = models.ForeignKey(
        User, related_name="cases", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
