# Generated by Django 4.2.6 on 2023-12-05 00:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Language',
            fields=[
                ('id_language', models.CharField(max_length=25, primary_key=True, serialize=False, verbose_name='nombreLanguage')),
                ('percentage', models.BigIntegerField(unique=True, verbose_name='PercentageOfSpeakers')),
                ('is_official', models.BooleanField(default=False, verbose_name='active')),
                ('name_language', models.CharField(max_length=25, verbose_name='NameOfLanguage')),
            ],
            options={
                'verbose_name': 'Name Language',
                'verbose_name_plural': 'Name Languages',
                'ordering': ['name_language'],
                'unique_together': {('name_language', 'percentage')},
            },
        ),
    ]
