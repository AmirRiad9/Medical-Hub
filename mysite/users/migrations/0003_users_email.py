# Generated by Django 4.0.3 on 2022-05-02 21:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_alter_users_user_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='users',
            name='email',
            field=models.CharField(default="None", max_length=60),
            preserve_default=False,
        ),
    ]
