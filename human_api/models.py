from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.models import BaseUserManager
from django.conf import settings


class HumanProfileManager(BaseUserManager):
    """Manager for human profiles"""

    def create_human(self, email, name, password=None):
        """Create a new human profile"""

        if not email:
            raise ValueError('Human must have an email address')

        email = self.normalize_email(email)
        human = self.model(email=email, name=name)

        human.set_password(password)
        human.save(using=self._db)

        return human

    def create_superuser(self, email, name, password):
        """Create and save a new super human with given details"""
        human = self.create_human(email, name, password)

        human.is_superuser = True
        human.is_staff = True
        human.save(using=self._db)

        return human


class HumanProfile(AbstractBaseUser, PermissionsMixin):
    """Database model for humans in the system"""

    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_activate = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = HumanProfileManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def get_full_name(self):
        """Retrieve full name of human"""

        return self.name

    def get_short_name(self):
        """Retrieve short name of human"""

        return self.name

    def __str__(self):
        """Return string representation of our human"""

        return self.email


class HumanCaseItem(models.Model):
    """Human status update"""

    human_profile = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
    status_text = models.CharField(max_length=255)
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        """Return the model as a string"""

        return self.status_text
