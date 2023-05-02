from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_routes, name='routes'),
    path('employees/', views.get_employees, name='employees'),
    path('employees/<str:id>/', views.get_employee, name='employees')
]
