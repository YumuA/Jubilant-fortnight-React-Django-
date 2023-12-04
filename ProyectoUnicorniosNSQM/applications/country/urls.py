from django.contrib import admin
from django.urls import path, include
from .views import CountryAPISerializer, CountryListAPIView

app_name = "country_app"

urlpatterns = [
        path('NewCountry/',
                CountryAPISerializer.as_view(),
                name='NewCountry'),
        path('showcountry/',
             CountryListAPIView.as_view(),
             name='Country-list')

]