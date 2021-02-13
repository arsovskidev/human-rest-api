from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from human_api import serializers


class HumanApiView(APIView):
    """Testing API View"""
    serializer_class = serializers.HumanSerializer

    def get(self, request, format=None):
        """Returns a list of contents"""
        an_apiview = [
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
