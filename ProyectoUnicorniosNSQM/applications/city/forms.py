# ------------------------------------------------------------------
# DJANGO
# ------------------------------------------------------------------

from django import forms

# ------------------------------------------------------------------
# MODELO
# ------------------------------------------------------------------

from .models import City

# ------------------------------------------------------------------
# FORMULARIO
# ------------------------------------------------------------------
class NewCityForm(forms.ModelForm):
    """Form definition for City."""
    class Meta:
        """Meta definition for Empleadoform."""
        # Modelo al que se aplica el formulario
        model = City
        # Campos usados en el formulario
        fields = (
            'name',
            'id_country',
            'district',
            'population',
        )
        # Labels de los campos del formulario
        labels = {
            'name': 'Name of city',
            'id_country': 'id Country',
            'district': 'District',
            'population': 'population',
        }
                # Espacio para agregar características a los campos
        widgets = {
            'name': forms.TextInput(
                attrs={'class': 'ContainerCityFormSelect'}
            ),
        }