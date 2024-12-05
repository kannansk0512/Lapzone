# Generated by Django 5.1.3 on 2024-12-04 05:22

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('EcommerceApp', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='products',
            name='product_image',
        ),
        migrations.AddField(
            model_name='images',
            name='product',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='EcommerceApp.products'),
        ),
    ]