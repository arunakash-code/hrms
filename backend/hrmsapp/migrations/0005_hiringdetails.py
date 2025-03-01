# Generated by Django 5.1.1 on 2024-10-14 04:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hrmsapp', '0004_signup_delete_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='HiringDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('job_roles', models.JSONField()),
                ('qualification', models.CharField(max_length=100)),
                ('gender', models.CharField(max_length=10)),
                ('area_of_interest', models.CharField(max_length=100)),
                ('specialization', models.CharField(max_length=100)),
                ('experience', models.CharField(max_length=50)),
                ('passed_out', models.CharField(max_length=4)),
                ('age_no_ratio', models.CharField(max_length=10)),
                ('location', models.CharField(max_length=100)),
                ('work_type', models.CharField(max_length=20)),
                ('interview_dates', models.JSONField()),
                ('no_of_vacancies', models.IntegerField()),
                ('salary_details', models.CharField(max_length=100)),
                ('no_of_vacancy_required', models.IntegerField()),
            ],
        ),
    ]
