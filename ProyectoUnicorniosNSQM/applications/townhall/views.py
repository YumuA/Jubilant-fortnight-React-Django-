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
    TownHallSerializer
)
# ------------------------------------------------------------------
# VISTAS A USAR
# ------------------------------------------------------------------

from django.views.generic import ListView, CreateView, UpdateView, DeleteView

# ------------------------------------------------------------------
# MODELOS
# ------------------------------------------------------------------
from .models import TownHall

# ------------------------------------------------------------------
# FORMULARIOS
# ------------------------------------------------------------------

from .forms import NewTownHallForm

# ------------------------------------------------------------------
# CREAR TownHall
# ------------------------------------------------------------------

class NuevoTownHall(CreateView):
    # Modelo usado para la vista
    model = TownHall
    # Template usado en la vista
    template_name = 'TownHall/NuevoTownHall.html'
    # Contexto usado para la impresión en el html
    context_object_name = 'NewTownHall'
    # formulario usado en la vista
    form_class = NewTownHallForm
    # Dirección a la que va cuando se ejecuta el submit
    success_url = reverse_lazy('inicio_app:home')

    def form_valid(self, form):
        # Guardando los datos del formulario
        TownHall = form.save(commit=False)
        TownHall.save()
        # Return del formulario completado
        return super(NuevoTownHall, self).form_valid(form)

# ------------------------------------------------------------------
# API CREAR UN TRABAJO
# ------------------------------------------------------------------
#class TrabajoAPISerializer(CreateAPIView):
#   serializer_class = TrabajosSerializer

# ------------------------------------------------------------------
# API CREAR UN TRABAJO
# ------------------------------------------------------------------
class TownHallAPISerializer(CreateAPIView):
    serializer_class = TownHallSerializer
class TownHallListAPIView(ListAPIView):
    queryset = TownHall.objects.all()
    serializer_class = TownHallSerializer

class TownHallDeleteAPIView(DestroyAPIView):
    queryset = TownHall.objects.all()
    serializer_class = TownHallSerializer
    