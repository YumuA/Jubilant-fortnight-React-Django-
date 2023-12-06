from django.db import models
from applications.townhall.models import TownHall
from applications.country.models import Country

class City(models.Model):
    idCity = models.CharField('idCity', max_length=3, primary_key=True)
    name = models.CharField('CityName', max_length=25)
    id_country = models.ForeignKey('country.Country', verbose_name=("Id Country"), on_delete=models.CASCADE, max_length=3, )
    district = models.CharField('NameOfCity', max_length=25)
    population = models.BigIntegerField('Population')
    id_townhall = models.ForeignKey("townhall.TownHall", verbose_name=("id_townhall"), on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Name City'
        verbose_name_plural = 'Name Citys'
        ordering = ['name']
        unique_together = ('name', 'id_country')

    def __str__(self):
        return f"{self.name} - {self.population} {str(self.idCity)}"
