from rest_framework import serializers

from human_api import models


class HumanSerializer(serializers.Serializer):
    """Serializes a name field for testing our APIView"""
    name = serializers.CharField(max_length=10)


class HumanProfileSerializer(serializers.ModelSerializer):
    """Serializes a human profile object"""

    class Meta:
        model = models.HumanProfile
        fields = ('id', 'email', 'name', 'password')
        extra_kwargs = {
            'password': {
                'write_only': True,
                'style': {'input_type': 'password'}
            }
        }

    def create(self, validated_data):
        """Create and return a new human"""
        human = models.HumanProfile.objects.create_human(
            email=validated_data['email'],
            name=validated_data['name'],
            password=validated_data['password'],
        )

        return human
