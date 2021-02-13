from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication

from human_api import serializers
from human_api import models
from human_api import permissions


class HumanApiView(APIView):
    """Testing API View"""
    serializer_class = serializers.HumanSerializer

    def get(self, request, format=None):
        """Returns a list of contents"""
        an_apiview = [
            'ApiView',
            'Hello World!',
        ]

        return Response({'title': 'Testing API View', 'an_apiview': an_apiview})

    def post(self, request):
        """Create hello message with our name"""
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            name = serializer.validated_data.get('name')
            message = f'Hello {name}'
            return Response({'message': message})
        else:
            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST
            )

    def put(self, request, pk=None):
        """Handle put method of an object"""
        return Response({'method': 'PUT'})

    def patch(self, request, pk=None):
        """Handle patch method of an object"""
        return Response({'method': 'PATCH'})

    def delete(self, request, pk=None):
        """Handle delete method of an object"""
        return Response({'method': 'DELETE'})


class HumanViewSet(viewsets.ViewSet):
    """Testing API ViewSet"""

    serializer_class = serializers.HumanSerializer

    def list(self, request):
        """Return a test message"""

        a_viewset = [
            'ViewSet',
            'Hello World!',
        ]

        return Response({'title': 'Testing API ViewSet', 'a_viewset': a_viewset})

    def create(self, request):
        """Create hello message with our name"""

        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            name = serializer.validated_data.get('name')
            message = f'Hello {name}'
            return Response({'message': message})
        else:
            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST
            )

    def retrieve(self, request, pk=None):
        """Handle getting an object by its ID"""

        return Response({'http_method': 'GET'})

    def update(self, request, pk=None):
        """Handle updating an object"""

        return Response({'http_method': 'PUT'})

    def partial_update(self, request, pk=None):
        """Handle updating part of an object"""

        return Response({'http_method': 'PATCH'})

    def destroy(self, request, pk=None):
        """Handle removing an object"""

        return Response({'http_method': 'DELETE'})


class HumanProfileViewSet(viewsets.ModelViewSet):
    """Handle creating and updating human profiles"""
    serializer_class = serializers.HumanProfileSerializer
    queryset = models.HumanProfile.objects.all()
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.UpdateOwnProfile,)
