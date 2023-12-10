from django.contrib import admin
from django.urls import path, include
from .views import  CountryLanguageAPISerializer, CountryLanguageListAPIView, CountryLanguageDeleteAPIView

app_name = "countrylanguage_app"

urlpatterns = [
            path('NewCl/',
                CountryLanguageAPISerializer.as_view(),
                name='NewCountryLenguage'),
                path('showcountrysl/', CountryLanguageListAPIView.as_view(), name='country-language-list'),
                path('deletecountrysl/<pk>', CountryLanguageDeleteAPIView.as_view(), name='townhall-del'),

]