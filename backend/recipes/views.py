# recipes/views.py

from rest_framework import generics
from .models import Recipe, RecipeRequest, Feedback
from .serializers import RecipeSerializer, RecipeRequestSerializer, FeedbackSerializer

# This class handles listing all recipes and creating new recipes
class RecipeList(generics.ListCreateAPIView):
    serializer_class = RecipeSerializer

    def get_queryset(self):
        queryset = Recipe.objects.all()
        category = self.request.query_params.get('category', None)
        if category is not None:
            queryset = queryset.filter(category=category)
        return queryset

# This class handles retrieving, updating, and deleting a single recipe
class RecipeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

# This class handles listing all recipe requests and creating new requests
class RecipeRequestList(generics.ListCreateAPIView):
    queryset = RecipeRequest.objects.all()
    serializer_class = RecipeRequestSerializer

# This class handles listing all feedback and creating new feedback
class FeedbackList(generics.ListCreateAPIView):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
