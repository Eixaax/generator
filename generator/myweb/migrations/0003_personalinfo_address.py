# Generated by Django 4.0 on 2024-04-11 10:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myweb', '0002_personalinfo_type_alter_personalinfo_means_of_income'),
    ]

    operations = [
        migrations.AddField(
            model_name='personalinfo',
            name='address',
            field=models.CharField(default=1, max_length=50),
            preserve_default=False,
        ),
    ]
