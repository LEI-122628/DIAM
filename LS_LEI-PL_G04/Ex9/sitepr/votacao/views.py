from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Questao, Opcao
from .serializers import QuestaoSerializer, OpcaoSerializer
from .models import Questao, Opcao, Comentario
from .serializers import QuestaoSerializer, OpcaoSerializer, ComentarioSerializer

# --- QUESTOES ---

@api_view(['GET', 'POST'])
def questoes_list(request):
    if request.method == 'GET':
        questoes = Questao.objects.all()
        serializer = QuestaoSerializer(questoes, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = QuestaoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def questao_detail(request, pk):
    try:
        questao = Questao.objects.get(pk=pk)
    except Questao.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = QuestaoSerializer(questao)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = QuestaoSerializer(questao, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        questao.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# --- OPCOES ---

@api_view(['GET', 'POST'])
def opcoes_list(request):
    if request.method == 'GET':
        opcoes = Opcao.objects.all()
        serializer = OpcaoSerializer(opcoes, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = OpcaoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def opcao_detail(request, pk):
    try:
        opcao = Opcao.objects.get(pk=pk)
    except Opcao.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = OpcaoSerializer(opcao)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = OpcaoSerializer(opcao, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        opcao.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    
@api_view(['GET', 'POST'])
def comentarios_list(request, pk):
    try:
        questao = Questao.objects.get(pk=pk)
    except Questao.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        comentarios = Comentario.objects.filter(questao=questao)
        serializer = ComentarioSerializer(comentarios, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ComentarioSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)