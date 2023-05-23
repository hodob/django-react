from django.shortcuts import render

# Create your views here.

# from django.http import HttpResponse
from rest_framework.response import Response
# from rest_framework.decorators import api_view
from rest_framework.views import APIView
from .models import DjangoMigrations



# def main(request):
#     message = request.GET.get('abc')
#     print(message)

#     return HttpResponse("안녕?")

# @api_view(['GET'])
# def main2(request):
#     message= "1"
#     return Response(message)

class main3(APIView):
    def get(self, request, format=None):
        message = "2"
        print(message+'테스트')
        dto=DjangoMigrations.objects.all()
        for i in dto:
            print(i.id)

        return Response(message)