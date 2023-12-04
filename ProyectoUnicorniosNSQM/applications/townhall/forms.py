# ------------------------------------------------------------------
# DJANGO
# ------------------------------------------------------------------

from django import forms

# ------------------------------------------------------------------
# MODELO
# ------------------------------------------------------------------

from .models import TownHall

# ------------------------------------------------------------------

# FORMULARIO
# ------------------------------------------------------------------
class NewTownHallForm(forms.ModelForm):
    """Form definition for TownHall."""
    class Meta:
        """Meta definition for Empleadoform."""
        # Modelo al que se aplica el formulario
        model = TownHall
        # Campos usados en el formulario
        fields = (
            'id_townhall',
            'mayor',
            'councillor',
        )
        # Labels de los campos del formulario
        labels = {
            'id_TownHall': 'id TownHall',
            'mayor': 'mayor',
            'councillor':'councillor',
        }
                # Espacio para agregar características a los campos
        widgets = {
            'name': forms.TextInput(
                attrs={'class': 'ContainerTownHallFormSelect'}
            ),
        }