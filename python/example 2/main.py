from aluno import Aluno

if __name__ == "__main__":
  lista = []
  aluno1 = Aluno('Renan')
  aluno2 = Aluno('João')
  lista.append(aluno1)
  lista.append(aluno2)
  for x in lista:
    print(x.__str__())