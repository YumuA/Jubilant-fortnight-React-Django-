from rest_framework import serializers, pagination

from .models import(
    CountryLanguage
)

class CountryLanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CountryLanguage
        fields = ('__all__')

