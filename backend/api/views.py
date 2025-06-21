from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from core.models import Contact
from .serializers import ContactSerializer
from rest_framework.response import Response
# Create your views here.



class ContactView(APIView):
    def get(self, request):
        contact = Contact.objects.all()
        serializer = ContactSerializer(contact, many=True)
        return Response(serializer.data)
