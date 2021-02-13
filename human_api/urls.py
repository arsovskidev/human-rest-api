from django.urls import path, include

from rest_framework.routers import DefaultRouter

from human_api import views


router = DefaultRouter()
router.register('human', views.HumanProfileViewSet)
router.register('case', views.HumanProfileCaseViewSet)

urlpatterns = [
    path('login/', views.HumanLoginApiView.as_view()),
    path('', include(router.urls)),
]
