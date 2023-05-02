from django.shortcuts import render
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import api_view
from .models import Employee
from .serializers import EmployeeSerializer


@api_view(['GET'])
def get_routes(request):
    routes = [{
        'Endpoint': '/employee/',
        'method': 'GET',
        'body': None,
        'description': 'Returns an array of notes'
    },
        {
            'Endpoint': '/employee/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single employee object'
    },
        {
            'Endpoint': '/employee/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new employee with data sent in post request'
    },
        {
            'Endpoint': '/employee/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing employee with data sent in post request'
    },
        {
            'Endpoint': '/employee/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting employee'
    }]
    return Response(routes)


@api_view(["GET"])
def get_employees(request):
    employees = Employee.objects.all()
    serializer = EmployeeSerializer(employees, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def get_employee(request, id):
    employees = Employee.objects.get(id=id)
    serializer = EmployeeSerializer(employees, many=False)
    return Response(serializer.data)
