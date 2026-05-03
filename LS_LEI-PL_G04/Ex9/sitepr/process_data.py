from votacao.models import Questao, Opcao
from django.utils import timezone

# alinea c
def apagar_todas_questoes():
    Questao.objects.all().delete()
    
apagar_todas_questoes()

# alinea a
def criar_questao(texto, lista_de_opcoes):
    q = Questao.objects.create(questao_texto=texto, pub_data=timezone.now())
    for opcao in lista_de_opcoes:
        q.opcao_set.create(opcao_texto=opcao['opcao_texto'], votos=opcao['votos'])
    return q

# alinea b
criar_questao("Qual a tua linguagem favorita?", [
    {'opcao_texto': 'Python', 'votos': 7},
    {'opcao_texto': 'JavaScript', 'votos': 4},
    {'opcao_texto': 'Java', 'votos': 2},
])

criar_questao("Qual o teu clube favorito?", [
    {'opcao_texto': 'Benfica', 'votos': 3},
    {'opcao_texto': 'Sporting', 'votos': 5},
    {'opcao_texto': 'Porto', 'votos': 1},
])

criar_questao("O que usamos em DIAM para backend?", [
    {'opcao_texto': 'Django', 'votos': 10},
    {'opcao_texto': 'Flask', 'votos': 1},
    {'opcao_texto': 'Express', 'votos': 0},
    {'opcao_texto': 'Spring', 'votos': 0},
])

criar_questao("O que usamos em DIAM para frontend?", [
    {'opcao_texto': 'React', 'votos': 8},
    {'opcao_texto': 'Vue', 'votos': 2},
    {'opcao_texto': 'Angular', 'votos': 1},
    {'opcao_texto': 'Svelte', 'votos': 0},
])

# alinea d
def mostrar_questao(questao):
    print(questao.questao_texto)
    for opcao in questao.opcao_set.all():
        print(f"  - {opcao.opcao_texto}: {opcao.votos} votos")


# alinea e
def mostrar_todas_questoes():
    for questao in Questao.objects.all():
        mostrar_questao(questao)

mostrar_todas_questoes()

# alinea f
def mostrar_questoes_por_prefixo(prefixo):
    for questao in Questao.objects.filter(questao_texto__startswith=prefixo):
        mostrar_questao(questao)


mostrar_questoes_por_prefixo("Qual")


# alinea g
def mostrar_questao_maior_numero_votos(questao):
    print(questao.questao_texto)
    opcoes = questao.opcao_set.all()
    max_votos = max(opcao.votos for opcao in opcoes)
    for opcao in opcoes:
        if opcao.votos == max_votos:
            print(f"  - {opcao.opcao_texto}: {opcao.votos} votos")


for q in Questao.objects.all():
    mostrar_questao_maior_numero_votos(q)


# alinea h
def total_votos():
    total = 0
    for opcao in Opcao.objects.all():
        total += opcao.votos
    return total


print("Total de votos:", total_votos())


