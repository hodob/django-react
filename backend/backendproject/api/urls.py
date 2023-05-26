from django.urls import path, include
from . import views
from .views import *

urlpatterns = [
    path('api/', main3.as_view()),
    # path('api2/', main5.as_view()),
    # path('api3/', main6.as_view()), # 다른테이블 가져오기
]