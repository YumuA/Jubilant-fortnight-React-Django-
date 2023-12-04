from rest_framework import serializers, pagination

from .models import(
    TownHall
)

class TownHallSerializer(serializers.ModelSerializer):
    class Meta:
        model = TownHall
        fields = ('__all__')

