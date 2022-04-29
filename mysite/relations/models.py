# models.py
from django.db import models
class Relations(models.Model):
    user_id = models.IntegerField(primary_key=True)
    doc_id = models.IntegerField()
    nurse_id = models.IntegerField()
    date = models.DateField()
    def __str__(self):
        return self.user_id
