# Generated by Django 4.0.3 on 2022-03-22 20:07

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Users',
            fields=[
                ('user_id', models.IntegerField(primary_key=True, serialize=False)),
                ('first_name', models.CharField(max_length=60)),
                ('last_name', models.CharField(max_length=60)),
                ('gender', models.CharField(max_length=60)),
                ('dob', models.DateField()),
                ('contact_number', models.IntegerField()),
                ('role_id', models.IntegerField()),
                ('address', models.CharField(max_length=35)),
                ('billing', models.CharField(max_length=35)),
                ('allergies', models.CharField(max_length=256)),
                ('insurance_id', models.IntegerField()),
                ('medical_history', models.CharField(max_length=256)),
                ('medical_condition', models.CharField(max_length=256)),
                ('emergency_contact_number', models.IntegerField()),
            ],
        ),
    ]