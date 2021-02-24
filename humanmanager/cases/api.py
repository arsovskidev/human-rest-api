from django.shortcuts import render
from cases.models import Case
from rest_framework import viewsets, permissions
from .serializers import CaseSerializer


# Case ViewSet
class CaseViewSet(viewsets.ModelViewSet):
    queryset = Case.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CaseSerializer
