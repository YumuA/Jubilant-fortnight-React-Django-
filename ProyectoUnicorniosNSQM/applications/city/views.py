from django.shortcuts import render
from django.urls import reverse_lazy

# Create your views here.

# ------------------------------------------------------------------
# APIS
# ------------------------------------------------------------------
from rest_framework.generics import (
    ListAPIView,
    CreateAPIView,
    # DetailView
    RetrieveAPIView,
    # Delete
    DestroyAPIView,
    # Actualizar
    UpdateAPIView,
    # Recupera y actualiza
    RetrieveUpdateAPIView,
    # Recupera y elimina
    RetrieveDestroyAPIView,
)

from .serializer import (
    CitySerializer
)
# ------------------------------------------------------------------
# VISTAS A USAR
# ------------------------------------------------------------------

from django.views.generic import ListView, CreateView, UpdateView, DeleteView

# ------------------------------------------------------------------
# MODELOS
# ------------------------------------------------------------------
from .models import City

# ------------------------------------------------------------------
# FORMULARIOS
# ------------------------------------------------------------------

from .forms import NewCityForm


# ------------------------------------------------------------------
# API CREAR UN TRABAJO
# ------------------------------------------------------------------
class CityAPISerializer(CreateAPIView):
    serializer_class = CitySerializer
class CityListAPIView(ListAPIView):
    serializer_class = CitySerializer

    def get_queryset(self):
        return City.objects.all()

class CityDeleteAPIView(DestroyAPIView):
    serializer_class = CitySerializer

    def get_queryset(self):
        return City.objects.all()