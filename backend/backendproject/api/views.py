# from django.shortcuts import render

# Create your views here.

# from django.http import HttpResponse,JsonResponse
from rest_framework.response import Response
from rest_framework.views import APIView
# from .models import *
# from .serializers import *
# from django.views.decorators.csrf import csrf_exempt
# from rest_framework.parsers import JSONParser
# from .dbconn import cursor2

import psycopg
conn = psycopg.connect(host='jjjteam.duckdns.org',dbname='tp_db',user='postgres',password='wjdgh7578@',port=5432)



#  단순 숫자만 바꾸는거
class inu_obs_mi_data(APIView):
    
    
    def get(self, request, format=None):
        cur=conn.cursor()
        message = "2"
        print(cur.execute("SELECT * FROM public.inu_obs_mi ORDER BY pk_id ASC LIMIT 100"))
        return Response(cur)


class api_test(APIView):
    def get(self, request, format=None):
        cur=conn.cursor()
        cur2=conn.cursor()
        tm1 = request.GET['tm1']
        tm2 = request.GET['tm2']
        # select_data = str("SELECT * FROM public.inu_obs_mi ORDER BY pk_id ASC LIMIT 100  " %(tm1))
        select_data = str("SELECT * FROM public.inu_obs_mi WHERE obs_time BETWEEN '%s' AND '%s' ; " %(tm1,tm2))
        # SELECT * FROM public.inu_obs_mi WHERE obs_time BETWEEN '2022-07-22 17:50:45.629947' AND '2022-07-22 17:51:35.803452' ;
        cur.execute(select_data).fetchall()
        dbColumnCount = cur2.execute("SELECT count(*) AS column_count FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'inu_obs_mi';").fetchall()
        print("@@@@@@@@@@@@@@@")
        print(cur)
        
        # print(type(dbColumnCount.description))
        # for i in dbColumnCount.description:
        #     print("@@@@@@@@@@@")
        #     print(type(i))
        #     print(i.)
        #     print("###########")
        # print(dbColumnCount.description[0][1])
        # for i in dbColumnCount:
        #     print(i[0])
        # for i in cur2:
        #     print(cur.description[i][0])
        return Response(cur)
    
    

    
# class main3(APIView):
#     def get(self, request, format=None):
#         message = "2"
#         print(message+'테스트')
#         dto=DjangoMigrations.objects.all()
#         aaa=DjangoMigrations()
#         test = DjangoMigrationsSerializers(dto, many=True)
#         # print(test.data)
#         for i in test.data:
#             print(i)
#         # for i in dto:
#         #     print(DjangoMigrationsSerializers(i))

#         return Response(message)
    
# @csrf_exempt
# def main4(request):
#     """
#     List all code snippets, or create a new snippet.
#     """
#     if request.method == 'GET':
#         snippets = DjangoMigrations.objects.all()
#         serializer = DjangoMigrationsSerializers(snippets, many=True)
#         return JsonResponse(serializer.data, safe=False)

#     # elif request.method == 'POST':
#     #     data = JSONParser().parse(request)
#     #     serializer = DjangoMigrationsSerializers(data=data)
#     #     if serializer.is_valid():
#     #         serializer.save()
#     #         return JsonResponse(serializer.data, status=201)
#     #     return JsonResponse(serializer.errors, status=400)
    
    
# # main3 클래스에서 json 타입으로 반환
# class main5(APIView):
#     def get(self, request, format=None):
#         snippets = DjangoMigrations.objects.all()
#         serializer = DjangoMigrationsSerializers(snippets, many=True)
#         return JsonResponse(serializer.data, safe=False)
    
# # 다른테이블 가져오는거 readonly
# class main6(APIView):
#     def get(self, request, format=None):
#         snippets = DjangoContentType.objects.all()
#         serializer = DjangoContentTypeSerializers(snippets, many=True)
#         return JsonResponse(serializer.data, safe=False)