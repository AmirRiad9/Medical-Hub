# serializers.py
from rest_framework import serializers

from .models import Relations


class RelationsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Relations
        fields = ('user_id', 'doc_id', 'nurse_id', 'date')
