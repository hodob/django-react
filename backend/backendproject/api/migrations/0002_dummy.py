# Generated by Django 4.2.1 on 2023-05-23 04:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Dummy',
            fields=[
                ('idx', models.AutoField(primary_key=True, serialize=False)),
                ('test1', models.CharField(max_length=200)),
            ],
            options={
                'verbose_name': 'Dummy',
                'verbose_name_plural': 'Dummys',
            },
        ),
    ]
