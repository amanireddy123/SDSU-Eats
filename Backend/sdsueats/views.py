from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import ValidationError
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate, login
from .models import CustomUser
from .serializers import CustomUserSerializer

from django.shortcuts import get_object_or_404


class CustomUserCreateView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
        except ValidationError as e:
            return Response({'error': e.detail}, status=status.HTTP_400_BAD_REQUEST)

        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

class CustomUserLoginView(APIView):
    permission_classes = [AllowAny]  # Allow any user, even if they are not authenticated

    def post(self, request, *args, **kwargs):
        username = request.data.get('username')  # Assuming email is used as the username
        password = request.data.get('password')

        # Authenticate user
        user = authenticate(request, username=username, password=password)
        print(user)
        if user is not None:
            
            # User credentials are valid, log the user in
            login(request, user)
            return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
        else:
            # User credentials are not valid
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)



class CustomUserDetailView(APIView):
    permission_classes = [AllowAny]
    serializer_class = CustomUserSerializer
    
    def get(self, request, *args, **kwargs):
        users = CustomUser.objects.all()
        serializer = self.serializer_class(users, many=True)
        return Response(serializer.data)