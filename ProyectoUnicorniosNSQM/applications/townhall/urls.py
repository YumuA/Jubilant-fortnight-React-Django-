from django.contrib import admin
from django.urls import path, include
from .views import TownHallAPISerializer, TownHallListAPIView, TownHallDeleteAPIView

app_name = "townhall_app"

urlpatterns = [
                path('NewTownHall/',
                TownHallAPISerializer.as_view(),
                name='NewTownHall'),
                path('showtownhalls/', TownHallListAPIView.as_view(), name='townhall-list'),
                path('deletetownhalls/<pk>/', TownHallDeleteAPIView.as_view(), name='townhall-del'),
]