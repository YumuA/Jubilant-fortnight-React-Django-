# ------------------------------------------------------------------
# DJANGO
# ------------------------------------------------------------------

from django import forms

# ------------------------------------------------------------------
# MODELO
# ------------------------------------------------------------------

from .models import Country

# ------------------------------------------------------------------

# FORMULARIO
# ------------------------------------------------------------------
class NewCountryForm(forms.ModelForm):
    """Form definition for Country."""
    class Meta:
        """Meta definition for Empleadoform."""
        # Modelo al que se aplica el formulario
        model = Country
        # Campos usados en el formulario
        fields = (
            'nombre_country',
            'id_country',
            'continent_country',
            'region_country',
            'surface_country',
            'indep_year_country',
            'population',
            'life_expectancy',
            'GNP',
            'GNPold',
            'localname',
            'government',
            'statehead',
            'capital_country',
            'code2',
        )
        # Labels de los campos del formulario
        labels = {
            'nombre_country': 'Name of Country',
            'id_country': 'id Country',
            'continent_country': 'Continent of country',
            'code': 'code number',
            'code': 'code number',
            'continent_country': 'number of country'
        }
                # Espacio para agregar características a los campos
        widgets = {
            'name': forms.TextInput(
                attrs={'class': 'ContainerCountryFormSelect'}
            ),
        }