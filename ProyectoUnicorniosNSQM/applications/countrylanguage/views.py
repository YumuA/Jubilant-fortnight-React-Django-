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
    CountryLanguageSerializer
)
# ------------------------------------------------------------------
# VISTAS A USAR
# ------------------------------------------------------------------

from django.views.generic import ListView, CreateView, UpdateView, DeleteView

# ------------------------------------------------------------------
# MODELOS
# ------------------------------------------------------------------
from .models import CountryLanguage

# ------------------------------------------------------------------
# FORMULARIOS
# ------------------------------------------------------------------

from .forms import NewCountryLanguageForm

# ------------------------------------------------------------------
# CREAR CountryLanguage
# ------------------------------------------------------------------

class NuevoCountryLanguage(CreateView):
    # Modelo usado para la vista
    model = CountryLanguage
    # Template usado en la vista
    template_name = 'CountryLanguage/NuevoCountryLanguage.html'
    # Contexto usado para la impresión en el html
    context_object_name = 'NewCountryLanguage'
    # formulario usado en la vista
    form_class = NewCountryLanguageForm
    # Dirección a la que va cuando se ejecuta el submit
    success_url = reverse_lazy('inicio_app:home')

    def form_valid(self, form):
        # Guardando los datos del formulario
        CountryLanguage = form.save(commit=False)
        CountryLanguage.save()
        # Return del formulario completado
        return super(NuevoCountryLanguage, self).form_valid(form)

# ------------------------------------------------------------------
# API CREAR UN TRABAJO
# ------------------------------------------------------------------
#class TrabajoAPISerializer(CreateAPIView):
#   serializer_class = TrabajosSerializer

# ------------------------------------------------------------------
# API CREAR UN TRABAJO
# ------------------------------------------------------------------
class CountryLanguageAPISerializer(CreateAPIView):
    serializer_class = CountryLanguageSerializer
class CountryLanguageListAPIView(ListAPIView):
    serializer_class = CountryLanguageSerializer

    def get_queryset(self):
        return CountryLanguage.objects.all()

class CountryLanguageDeleteAPIView(DestroyAPIView):
    serializer_class = CountryLanguageSerializer

    def get_queryset(self):
        return CountryLanguage.objects.all()