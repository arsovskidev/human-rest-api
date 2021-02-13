from django.contrib import admin

from human_api import models


admin.site.register(models.HumanProfile)
admin.site.register(models.HumanCaseItem)
