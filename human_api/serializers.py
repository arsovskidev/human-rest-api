from rest_framework import serializers

from human_api import models


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


class HumanCaseItemSerializer(serializers.ModelSerializer):
    """Serializes human case items"""

    class Meta:
        model = models.HumanCaseItem
        fields = ('id', 'human_profile', 'status_text', 'created_on')
        extra_kwargs = {'human_profile': {'read_only': True}}
