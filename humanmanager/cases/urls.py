from rest_framework import routers
from .api import CaseViewSet


router = routers.DefaultRouter()
router.register('api/cases', CaseViewSet, basename='cases')

urlpatterns = router.urls
