from django.urls import path

from human_api import views


urlpatterns = [
    path('human-view/', views.HumanApiView.as_view()),
]
