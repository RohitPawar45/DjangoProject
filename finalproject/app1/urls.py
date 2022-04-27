from unicodedata import name
from django.urls import path
from app1 import views



urlpatterns = [
    path('', views.Home, name='Home'),
    path('b', views.Books, name='Books'),
    path('f', views.Feedback, name='Feedback'),
    path('u', views.UserLogin, name='UserLogin'),
    path('l', views.LibrarianLogin, name='LibrarianLogin'),
    path('r', views.Register, name='Register'),
]