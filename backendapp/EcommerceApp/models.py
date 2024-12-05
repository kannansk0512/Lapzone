from django.db import models
from django.contrib.auth.models import User


class Products(models.Model):
    product_id=models.AutoField(primary_key=True)
    product_name=models.CharField(max_length=200)
    product_price=models.IntegerField()
    product_quantity=models.IntegerField(null=True)


class Images(models.Model):
    image_id=models.AutoField(primary_key=True)
    image=models.ImageField(upload_to='images',null=True)
    product = models.ForeignKey(Products,on_delete=models.CASCADE,null=True)


class Cart(models.Model):
    cart_id=models.AutoField(primary_key=True)
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    product=models.ForeignKey(Products,on_delete=models.CASCADE)
    quantity =  models.IntegerField(default=1)