from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('test', views.test),
    path('auto_restart', views.restart),
    path('change_user_settings', views.change_user_settings),
    path('upload_test_results', views.upload_test_results),
]
