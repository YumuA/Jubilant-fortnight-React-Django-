# ------------------------------------------------------------------
# DJANGO
# ------------------------------------------------------------------

from django import forms

# ------------------------------------------------------------------
# MODELO
# ------------------------------------------------------------------

from .models import Language

# ------------------------------------------------------------------

# FORMULARIO
# ------------------------------------------------------------------
class NewLanguageForm(forms.ModelForm):
    """Form definition for Language."""
    class Meta:
        """Meta definition for Empleadoform."""
        # Modelo al que se aplica el formulario
        model = Language
        # Campos usados en el formulario
        fields = (
                'id_language',
                'percentage',
                'is_official', 
                'name_language',
        )
        # Labels de los campos del formulario
        labels = {
            'id_language': 'id_countryLaLanguage',
            'is_official':' Is official language',
            'name_language': 'Name of Language',
            'percentage':'percentage'
        }
                # Espacio para agregar características a los campos
        widgets = {
            'name': forms.TextInput(
                attrs={'class': 'ContainerLanguageFormSelect'}
            ),
        }