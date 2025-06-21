from django.urls import path
from .views import ContactView


app_name = 'api'

urlpatterns = [
    path('contact/', ContactView.as_view(), name='contact')
]