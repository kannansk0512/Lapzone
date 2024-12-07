"""
URL configuration for EcommerceProject project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from EcommerceApp import views

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('signup/',views.sign_up),
    path('add_product/',views.add_product),
    path('show_products/',views.show_products),
    path('one_product/<int:id>',views.one_product),
    path('update_product/<int:id>',views.update_product),
    path('delete_product',views.delete_product),
    path('login/', views.login_view, name='login'),
    path('profile/', views.user_profile_view, name='user-profile'),
    path('add_to_cart/<int:id>',views.add_to_cart),
    path('view_cart',views.view_cart),
    path('delete_cart/<int:id>',views.remove_from_cart),
    path('confirm_order/',views.confirm_order),
    path('cart_count',views.cart_count)




]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

