from django.db import models

# Create your models here.
# models.py
from django.db import models


class Users(models.Model):
    user_id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=60)
    last_name = models.CharField(max_length=60)
    gender = models.CharField(max_length=60)
    dob = models.DateField()
    contact_number = models.IntegerField()
    role_id = models.IntegerField()
    address = models.CharField(max_length=35)
    billing = models.CharField(max_length=35)
    allergies = models.CharField(max_length=256)
    insurance_id = models.IntegerField()
    medical_history = models.CharField(max_length=256)
    medical_condition = models.CharField(max_length=256)
    emergency_contact_number = models.IntegerField()
    email = models.CharField(max_length=60)

    def __str__(self):
        return self.first_name
