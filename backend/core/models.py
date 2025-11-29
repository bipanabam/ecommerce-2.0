from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    username = models.CharField(max_length=150, unique=True, primary_key=True)
    profile_image = models.ImageField(upload_to='profile_image/', blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)

    user_type = models.CharField(
        max_length=50,
        choices=[
            ('customer', 'Customer'),
            ('seller', 'Seller'),
            ('admin', 'Admin'),
        ],
        default='customer',
    )

    is_email_verified = models.BooleanField(default=False)
    is_phone_verified = models.BooleanField(default=False)

    wants_newsletter = models.BooleanField(default=True)
    wants_notifications = models.BooleanField(default=True)

    def __str__(self):
        return self.username

