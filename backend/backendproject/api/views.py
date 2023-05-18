from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse


def main(request):
    message = request.GET.get('abc')
    print(message)

    return HttpResponse("안녕?")