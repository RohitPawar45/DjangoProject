from urllib import request
from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.views import View


def Home(request):
    return render(request,"Home.html")

def Books(request):
    return render(request,"Books.html")

def Feedback(request):
    return render(request,"Feedback.html")

def LibrarianLogin(request):
    return render(request,"LibrarianLogin.html")

def UserLogin(request):
    return render(request,"UserLogin.html")

def Register(request):
    return render(request,"Register.html")

# Create your views here.
