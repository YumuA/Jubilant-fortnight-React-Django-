from django.db import models

class Language(models.Model):
    id_language = models.CharField('nombreLanguage', max_length=25, primary_key=True)
    percentage = models.BigIntegerField('PercentageOfSpeakers')
    is_official = models.BooleanField('active', default=False)

    class Meta:
        verbose_name = 'Name Language'
        verbose_name_plural = 'Name Languages'
        ordering = ['id_language']
        unique_together = ('id_language', 'percentage')

    def __str__(self):
        return f"{self.id_language} - {self.percentage} {str(self.id_language)}"
