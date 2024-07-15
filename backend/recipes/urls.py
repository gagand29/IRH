
from django.urls import path
from .views import RecipeList, RecipeDetail, RecipeRequestList, FeedbackList

urlpatterns = [
    path('recipes/', RecipeList.as_view(), name='recipe-list'),
    path('recipes/<int:pk>/', RecipeDetail.as_view(), name='recipe-detail'),
    path('recipe-requests/', RecipeRequestList.as_view(), name='recipe-request-list'),
    path('feedback/', FeedbackList.as_view(), name='feedback-list'),
]