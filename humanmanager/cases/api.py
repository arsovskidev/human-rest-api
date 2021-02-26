from django.shortcuts import render
from cases.models import Case
from rest_framework import viewsets, permissions
from .serializers import CaseSerializer


# Case ViewSet
class CaseViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = CaseSerializer

    def get_queryset(self):
        return self.request.user.cases.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
