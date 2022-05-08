# views.py
from rest_framework import viewsets

from .serializers import RelationsSerializer
from .models import Relations


class RelationsViewSet(viewsets.ModelViewSet):
    queryset = Relations.objects.all().order_by('user_id')
    serializer_class = RelationsSerializer