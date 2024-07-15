# Register your models here.
# recipes/admin.py

from django.contrib import admin
from .models import Recipe, RecipeRequest, Feedback

admin.site.register(Recipe)
admin.site.register(RecipeRequest)
admin.site.register(Feedback)
