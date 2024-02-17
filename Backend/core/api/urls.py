from home.views import index
from django.urls import path

urlpatterns = [
    path('index/', index.as_view(), name='index'),
]