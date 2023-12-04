# ------------------------------------------------------------------
# DJANGO
# ------------------------------------------------------------------

from django import forms

# ------------------------------------------------------------------
# MODELO
# ------------------------------------------------------------------

from .models import CountryLanguage

# ------------------------------------------------------------------

# FORMULARIO
# ------------------------------------------------------------------
class NewCountryLanguageForm(forms.ModelForm):
    """Form definition for CountryLanguage."""
    class Meta:
        """Meta definition for Empleadoform."""
        # Modelo al que se aplica el formulario
        model = CountryLanguage
        # Campos usados en el formulario
        fields = (
            'id_language',
            'id_country',
            'name_language'
        )
        # Labels de los campos del formulario
        labels = {
            'id_language': 'id Language',
            'id_country': 'Name of Country',
            'name_language': 'id Language',
        }
                # Espacio para agregar características a los campos
        widgets = {
            'name': forms.TextInput(
                attrs={'class': 'ContainerCountryLanguageFormSelect'}
            ),
        }