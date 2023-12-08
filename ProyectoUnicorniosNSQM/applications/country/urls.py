from django.contrib import admin
from django.urls import path, include
from .views import CountryAPISerializer, CountryListAPIView, CountryAPIRetrive, CountryAPIDelete

app_name = "country_app"

urlpatterns = [
        path('NewCountry/',
                CountryAPISerializer.as_view(),
                name='NewCountry'),
        path('showcountry/',
             CountryListAPIView.as_view(),
             name = 'Show Country'),
        path('showcountry/<pk>',
             CountryAPIRetrive.as_view(),
             name='Country-listed'),
        path('deletecountry/<pk>',
             CountryAPIDelete.as_view(),
             name='deleting')

]