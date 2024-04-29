# Generated by Django 4.0 on 2024-04-26 21:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('myweb', '0005_alter_personalinfo_problem'),
    ]

    operations = [
        migrations.CreateModel(
            name='EducAttain',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('educ_name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='EstIncome',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('est_income_name', models.CharField(max_length=50)),
                ('est_income_details', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Genders',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('gndr_name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='MaritalStatus',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('maritals_name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Ranges',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ranges_name', models.CharField(max_length=50)),
                ('ranges_details', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Types',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type_name', models.CharField(max_length=50)),
            ],
        ),
        migrations.AlterField(
            model_name='personalinfo',
            name='educational_attainment',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='myweb.educattain'),
        ),
        migrations.AlterField(
            model_name='personalinfo',
            name='estimated_income',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='myweb.estincome'),
        ),
        migrations.AlterField(
            model_name='personalinfo',
            name='marital_status',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='myweb.maritalstatus'),
        ),
        migrations.AlterField(
            model_name='personalinfo',
            name='range',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='myweb.ranges'),
        ),
        migrations.AlterField(
            model_name='personalinfo',
            name='sex_gender',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='myweb.genders'),
        ),
        migrations.AlterField(
            model_name='personalinfo',
            name='type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='myweb.types'),
        ),
    ]
