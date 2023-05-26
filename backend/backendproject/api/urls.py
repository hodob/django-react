from django.urls import path, include
from . import views
from .views import *

urlpatterns = [
    path('api/', inu_obs_mi_data.as_view()),
    path('api2/', api_test.as_view()),
    # path('api3/', main6.as_view()), # 다른테이블 가져오기
]