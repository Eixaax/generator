# Generated by Django 4.0 on 2024-04-11 08:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myweb', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='personalinfo',
            name='type',
            field=models.CharField(default=1, max_length=50),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='personalinfo',
            name='means_of_income',
            field=models.CharField(max_length=200),
        ),
    ]
