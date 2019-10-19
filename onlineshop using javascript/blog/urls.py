from django.urls import path
from . import views

app_name='blog'

urlpatterns = [
    path("", views.index, name="blogHome"),
    path("blogpost/<int:id>", views.blogpost, name="blogHome")
]