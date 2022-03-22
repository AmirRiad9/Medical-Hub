# views.py
from rest_framework import viewsets

from .serializers import UsersSerializer
from .models import Users


class UsersViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all().order_by('user_id')
    serializer_class = UsersSerializer
