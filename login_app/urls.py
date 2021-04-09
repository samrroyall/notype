from django.urls import path
from . import views

urlpatterns = [
    path('login', views.login),
    path('register', views.register),
    path('reset', views.reset),
    path('logout', views.logout),
]