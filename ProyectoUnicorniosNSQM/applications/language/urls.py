from django.contrib import admin
from django.urls import path, include
from .views import LanguageAPISerializer, LanguageListAPIView

app_name = "language_app"

urlpatterns = [
            path('NewLanguage/',
                LanguageAPISerializer.as_view(),
                name='NewLanguage'),
                path('showlanguages/', LanguageListAPIView.as_view(), name='Language-list'),
]