from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('change_layout', views.change_layout),
    path('change_mode', views.change_mode),
]
