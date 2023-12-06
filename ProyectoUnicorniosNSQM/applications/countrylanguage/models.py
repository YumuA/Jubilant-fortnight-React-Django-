from django.db import models
from applications.language.models import Language

class CountryLanguage(models.Model):
    id_language = models.ForeignKey('language.Language', verbose_name=('idLanguageofcountry'), on_delete=models.CASCADE)
    name_language = models.CharField('Name Language', max_length=3, primary_key=True)
    id_country = models.CharField('id country', max_length=3)

    class Meta:
        verbose_name = 'Name Language'
        verbose_name_plural = 'Name Languages'
        ordering = ['name_language']
        unique_together = ('id_language', 'id_country')

    def __str__(self):
        return f"{self.name_language} - {self.id_country} {str(self.id_language)}"
