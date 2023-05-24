from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse,JsonResponse
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import DjangoMigrations ,DjangoContentType
from .serializers import DjangoMigrationsSerializers, DjangoContentTypeSerializers
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser


#  단순 숫자만 바꾸는거
class main3(APIView):
    def get(self, request, format=None):
        message = "2"
        print(message+'테스트')
        dto=DjangoMigrations.objects.all()
        aaa=DjangoMigrations()
        test = DjangoMigrationsSerializers(dto, many=True)
        # print(test.data)
        for i in test.data:
            print(i)
        # for i in dto:
        #     print(DjangoMigrationsSerializers(i))

        return Response(message)
    
@csrf_exempt
def main4(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        snippets = DjangoMigrations.objects.all()
        serializer = DjangoMigrationsSerializers(snippets, many=True)
        return JsonResponse(serializer.data, safe=False)

    # elif request.method == 'POST':
    #     data = JSONParser().parse(request)
    #     serializer = DjangoMigrationsSerializers(data=data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return JsonResponse(serializer.data, status=201)
    #     return JsonResponse(serializer.errors, status=400)
    
    
# main3 클래스에서 json 타입으로 반환
class main5(APIView):
    def get(self, request, format=None):
        snippets = DjangoMigrations.objects.all()
        serializer = DjangoMigrationsSerializers(snippets, many=True)
        return JsonResponse(serializer.data, safe=False)
    
# 다른테이블 가져오는거 readonly
class main6(APIView):
    def get(self, request, format=None):
        snippets = DjangoContentType.objects.all()
        serializer = DjangoContentTypeSerializers(snippets, many=True)
        return JsonResponse(serializer.data, safe=False)