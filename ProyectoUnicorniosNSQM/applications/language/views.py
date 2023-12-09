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
    LanguageSerializer
)
# ------------------------------------------------------------------
# VISTAS A USAR
# ------------------------------------------------------------------

from django.views.generic import ListView, CreateView, UpdateView, DeleteView

# ------------------------------------------------------------------
# MODELOS
# ------------------------------------------------------------------
from .models import Language

# ------------------------------------------------------------------
# FORMULARIOS
# ------------------------------------------------------------------

from .forms import NewLanguageForm

# ------------------------------------------------------------------
# CREAR Language
# ------------------------------------------------------------------

class NuevoLanguage(CreateView):
    # Modelo usado para la vista
    model = Language
    # Template usado en la vista
    template_name = 'Language/NuevoLanguage.html'
    # Contexto usado para la impresión en el html
    context_object_name = 'NewLanguage'
    # formulario usado en la vista
    form_class = NewLanguageForm
    # Dirección a la que va cuando se ejecuta el submit
    success_url = reverse_lazy('inicio_app:home')

    def form_valid(self, form):
        # Guardando los datos del formulario
        Language = form.save(commit=False)
        Language.save()
        # Return del formulario completado
        return super(NuevoLanguage, self).form_valid(form)

# ------------------------------------------------------------------
# API CREAR UN TRABAJO
# ------------------------------------------------------------------
#class TrabajoAPISerializer(CreateAPIView):
#   serializer_class = TrabajosSerializer

# ------------------------------------------------------------------
# API CREAR UN TRABAJO
# ------------------------------------------------------------------
class LanguageAPISerializer(CreateAPIView):
    serializer_class = LanguageSerializer

class LanguageListAPIView(ListAPIView):
    serializer_class = LanguageSerializer

    def get_queryset(self):
        return Language.objects.all()

class LanguageDeleteAPIView(DestroyAPIView):
    serializer_class = LanguageSerializer

    def get_queryset(self):
        return Language.objects.all()
        
class LanguageUpdateAPIView(UpdateAPIView):
    serializer_class = LanguageSerializer

    def get_queryset(self):
        return Language.objects.all()