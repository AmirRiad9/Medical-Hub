# serializers.py
from rest_framework import serializers

from .models import Users


class UsersSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Users
        fields = ('user_id', 'first_name', 'last_name', 'gender', 'dob', 'contact_number', 'role_id', 'address',
                  'billing', 'allergies', 'insurance_id', 'medical_history', 'medical_condition',
                  'emergency_contact_number','email')
