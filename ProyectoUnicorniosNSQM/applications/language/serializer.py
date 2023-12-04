from rest_framework import serializers, pagination

from .models import(
    Language
)

class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = ('__all__')

