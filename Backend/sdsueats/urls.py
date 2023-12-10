# accounts/urls.py
from django.urls import path
from .views import CustomUserCreateView, CustomUserLoginView, CustomUserDetailView

urlpatterns = [
    path('register/', CustomUserCreateView.as_view(), name='register'),
    path('login/', CustomUserLoginView.as_view(), name='login'),
     path('user/<int:pk>/', CustomUserDetailView.as_view(), name='user-detail'),
    # Add other URL patterns as needed
]
