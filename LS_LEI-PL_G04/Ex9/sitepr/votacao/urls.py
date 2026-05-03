from django.urls import path
from . import views

urlpatterns = [
    path('questoes/', views.questoes_list),
    path('questoes/<int:pk>/', views.questao_detail),
    path('opcoes/', views.opcoes_list),
    path('opcoes/<int:pk>/', views.opcao_detail),
    path('questoes/<int:pk>/comentarios/', views.comentarios_list),
]