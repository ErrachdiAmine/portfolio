from core.models import Contact
from rest_framework import serializers


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact 
        fields = [
            'phone',
            'github',
            'linkedin',
            'instagram'
        ]
