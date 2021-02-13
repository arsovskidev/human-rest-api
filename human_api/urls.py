from django.urls import path, include

from rest_framework.routers import DefaultRouter

from human_api import views


router = DefaultRouter()
router.register('human-viewset', views.HumanViewSet, basename='human-viewset')

urlpatterns = [
    path('human-view/', views.HumanApiView.as_view()),
    path('', include(router.urls)),
]
