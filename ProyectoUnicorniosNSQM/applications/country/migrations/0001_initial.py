# Generated by Django 4.2.6 on 2023-12-08 22:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('countrylanguage', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='Country',
            fields=[
                ('nombre_country', models.CharField(max_length=25, verbose_name='nombreCountry')),
                ('id_country', models.CharField(max_length=3, primary_key=True, serialize=False, verbose_name='idCountry')),
                ('continent_country', models.IntegerField(verbose_name='continentCountry')),
                ('region_country', models.CharField(max_length=20, verbose_name='regionCountry')),
                ('surface_country', models.DecimalField(decimal_places=2, max_digits=10, verbose_name='countryArea')),
                ('indep_year_country', models.SmallIntegerField(null=True, verbose_name='indepCountry')),
                ('population', models.IntegerField(verbose_name='populationCountry')),
                ('life_expectancy', models.DecimalField(decimal_places=1, max_digits=3, null=True, verbose_name='lifeExpectancy')),
                ('GNP', models.DecimalField(decimal_places=2, max_digits=10, null=True, verbose_name='GNPCountry')),
                ('GNPold', models.DecimalField(decimal_places=2, max_digits=10, null=True, verbose_name='GNPold')),
                ('localname', models.CharField(max_length=45, verbose_name='countryLocalname')),
                ('government', models.CharField(max_length=45, verbose_name='countryGovernment')),
                ('statehead', models.CharField(max_length=60, null=True, verbose_name='countryLeader')),
                ('capital_country', models.IntegerField(null=True, verbose_name='capitalId')),
                ('code2', models.CharField(max_length=2, verbose_name='countryCode2')),
                ('name_language', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='countrylanguage.countrylanguage', verbose_name='Name Language')),
            ],
            options={
                'verbose_name': 'Name Country',
                'verbose_name_plural': 'Name Countries',
                'ordering': ['nombre_country'],
                'unique_together': {('nombre_country', 'capital_country')},
            },
        ),
    ]
