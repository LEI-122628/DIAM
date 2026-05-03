from rest_framework import serializers
from .models import Questao, Opcao
from .models import Questao, Opcao, Comentario

class OpcaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Opcao
        fields = '__all__'

class QuestaoSerializer(serializers.ModelSerializer):
    opcao_set = OpcaoSerializer(many=True, read_only=True)
    class Meta:
        model = Questao
        fields = '__all__'

class ComentarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comentario
        fields = '__all__'