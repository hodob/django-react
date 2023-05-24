from django.urls import path, include
from . import views
from .views import *

urlpatterns = [
    path('', views.main4),
    path('api/', main3.as_view()),
    path('api2/', main5.as_view()),
]