# Generated by Django 5.1.1 on 2024-10-14 11:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hrmsapp', '0008_certifications_educationdetails_experiencedetails_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='HRDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hr_name', models.CharField(max_length=255)),
                ('hr_phone_number', models.CharField(max_length=20)),
                ('hr_email', models.EmailField(max_length=254)),
                ('hr_social_media', models.URLField(blank=True, max_length=255, null=True)),
            ],
        ),
    ]
