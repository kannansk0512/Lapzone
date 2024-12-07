from .models import Products, Images, Cart,Orders
from .serializer import LaptopSerializer, CartSerializer, UserSerializer,OrderSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth.models import User
from django.contrib.auth.hashers import check_password
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_product(request):
    product_data = {
        'product_name': request.data.get('product_name'),
        'product_price': request.data.get('product_price'),
        'product_quantity': request.data.get('product_quantity'),
    }
    serializer = LaptopSerializer(data=product_data)
    if serializer.is_valid():
        product = serializer.save()

        images = request.FILES.getlist('images')
        for image in images:
            Images.objects.create(product=product, image=image)

        return Response("Product and images saved successfully")
    else:
        return Response(serializer.errors, status=400)


@api_view(['GET'])
def show_products(request):
    lap_data = Products.objects.all()
    json_data = LaptopSerializer(lap_data, many=True)
    data = json_data.data
    return Response(data)


@api_view(['GET'])
def one_product(request, id):
    try:
        lap_data = Products.objects.get(product_id=id)
        json_data = LaptopSerializer(lap_data, many=False)
        data = json_data.data
        return Response(data)
    except Products.DoesNotExist:
        return Response("Data Not Available")


@api_view(['PUT'])
def update_product(request, id):
    try:
        lap_data = Products.objects.get(product_id=id)
        json_data = LaptopSerializer(data=request.data, instance=lap_data, partial=True)
        if json_data.is_valid():
            json_data.save()
            return Response("Data is Updated")
        else:
            return Response(json_data.errors)
    except Products.DoesNotExist:
        return Response("data not available")


@api_view(['DELETE'])
def delete_product(request, id):
    try:
        lap_data = Products.objects.get(product_id=id)
        lap_data.delete()
        return Response("data deleted")
    except Products.DoesNotExist:
        return Response("data not available")


@api_view(['POST'])
def sign_up(request):
    try:
        data = request.data
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')


        if not username or not email or not password:
            return Response({'error': 'All fields are required.'}, status=status.HTTP_400_BAD_REQUEST)


        if User.objects.filter(username=username).exists():
            return Response({'error': 'Username already exists.'}, status=status.HTTP_400_BAD_REQUEST)


        user = User.objects.create_user(username=username, email=email, password=password)
        return Response({'message': 'User created successfully.'}, status=status.HTTP_201_CREATED)

    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if not username or not password:
        return Response(
            {"error": "username and password are required."},
            status=status.HTTP_400_BAD_REQUEST
        )

    try:
        user = User.objects.get(username=username)
        if not check_password(password, user.password):
            return Response(
                {"error": "Invalid credentials."},
                status=status.HTTP_401_UNAUTHORIZED
            )
        refresh = RefreshToken.for_user(user)
        return Response(
            {
                "refresh": str(refresh),
                "access": str(refresh.access_token),
                "user_id": user.id,
                "username": user.username,
                "email": user.email,
            },
            status=status.HTTP_200_OK
        )
    except User.DoesNotExist:
        return Response(
            {"error": "User not found."},
            status=status.HTTP_404_NOT_FOUND
        )


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_profile_view(request):

    user = request.user
    return Response(
        {
            "user_id": user.id,
            "username": user.username,
            "email": user.email,
            "first_name": user.first_name,
            "last_name": user.last_name,
        },
        status=status.HTTP_200_OK
    )


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_to_cart(request, id):
    cart_model = Cart()

    product = Products.objects.get(product_id=id)
    user = request.user
    try:
        cart_object = Cart.objects.get(product=product, user=user)
        if request.data.get('quantity'):
            cart_object.quantity = cart_object.quantity + int(request.data.get('quantity'))
        else:
            cart_object.quantity = cart_object.quantity +1
        cart_object.save()
        return Response("Added to cart")
    except Cart.DoesNotExist:
        cart_model.product = product
        cart_model.user = user
        cart_model.save()
        return Response("Added to cart")


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def view_cart(request):
    cart = Cart.objects.filter(user=request.user)
    json_data = CartSerializer(cart, many=True)
    data = json_data.data
    return Response(data)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def remove_from_cart(request, id):
    try:

        user = request.user

        cart_item = Cart.objects.get(cart_id=id, user=user)

        # Delete the cart item
        cart_item.delete()

        return Response({"message": "Product removed from cart"}, status=status.HTTP_200_OK)

    except Cart.DoesNotExist:
        return Response(
            {"error": "Cart item does not exist"},
            status=status.HTTP_404_NOT_FOUND
        )
    except Exception as e:
        return Response(
            {"error": str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


@api_view(['POST'])
def confirm_order(request):
    try:
        data = request.data
        print("Received Data:", data)  # Debug the structure of incoming data

        # Loop through items and create order records
        for item in data['items']:
            product = Products.objects.get(product_id=item['products'])
            Orders.objects.create(
                user=request.user,
                products=product,
                quantity=item['quantity'],
                total_price=item['total_price']
            )

        return Response({"message": "Order confirmed"}, status=201)
    except Exception as e:
        print("Error:", str(e))  # Debug the error
        return Response({"error": str(e)}, status=400)


@api_view(['GET'])
def cart_count(request):
    count=Cart.objects.filter(user=request.user).count()
    json_data=CartSerializer(count,many=False)
    data=json_data.data
    return Response(data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def profile(request):
    user=request.user
    user_data=User.objects.get(id=user.id)
    json_data=UserSerializer(user_data,many=False)
    data=json_data.data
    return Response(data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def my_orders(request):
    user=request.user
    order_data=Orders.objects.filter(user=user)
    json_data=OrderSerializer(order_data,many=True)
    data=json_data.data
    return Response(data)



