from django.contrib import admin
from django.urls import path, include
from .views import LanguageAPISerializer, LanguageListAPIView, LanguageDeleteAPIView, LanguageUpdateAPIView

app_name = "language_app"

urlpatterns = [
            path('NewLanguage/',
                LanguageAPISerializer.as_view(),
                name='NewLanguage'),
                path('showlanguages/', LanguageListAPIView.as_view(), name='Language-list'),
                path('deletelanguage/<pk>', LanguageDeleteAPIView.as_view(), name='deletelanguage' ),
                path('updatelanguage/<pk>', LanguageUpdateAPIView.as_view(), name = 'updatelanguage')
]