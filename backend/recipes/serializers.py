# recipes/serializers.py

from rest_framework import serializers
from .models import Recipe, RecipeRequest, Feedback

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'

class RecipeRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeRequest
        fields = '__all__'

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = '__all__'
