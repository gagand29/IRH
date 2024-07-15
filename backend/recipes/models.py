# recipes/models.py

from django.db import models

class Recipe(models.Model):
    name = models.CharField(max_length=100)
    ingredients = models.TextField()
    instructions = models.TextField()
    image_url = models.URLField(max_length=200, null=True, blank=True)
    category = models.CharField(max_length=50)  # e.g., 'North Indian', 'South Indian'

    def __str__(self):
        return self.name

class RecipeRequest(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    recipe_name = models.CharField(max_length=100)
    category = models.CharField(max_length=50)  # e.g., 'North Indian', 'South Indian'
    request_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.recipe_name} requested by {self.name}"

class Feedback(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    feedback_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Feedback from {self.name}"
