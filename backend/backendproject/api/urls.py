from django.urls import path, include
from . import views
from .views import(main3)

urlpatterns = [
    # path('', views.main1),
    path('', main3.as_view()),
]