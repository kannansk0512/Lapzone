from rest_framework import serializers
from .models import Products, Images, Cart, Orders
from django.contrib.auth.models import User


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = ['image']  # You can add more fields if necessary


class LaptopSerializer(serializers.ModelSerializer):
    images = ImageSerializer(source='images_set', many=True, read_only=True)  # Nested images

    class Meta:
        model = Products
        fields = '__all__'


class CartSerializer(serializers.ModelSerializer):
    product = LaptopSerializer(read_only=True)

    class Meta:
        model = Cart
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model=Orders
        fields='__all__'
