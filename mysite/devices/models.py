from django.db import models

# Create your models here.

class Device(models.Model):
    device_type = models.CharField(max_length=60)
    unit = models.CharField(max_length=60)
    dop = models.DateField()
    user_id = models.IntegerField()
    framework_version = models.DecimalField(max_digits=3, decimal_places=2)
    software_version = models.DecimalField(max_digits=3, decimal_places=2)

    def __str__(self):
        return str(self.id)
