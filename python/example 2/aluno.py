class Aluno:

  def __init__(self, nome, email="default@gmail.com"):
    self.__nome=nome
    self.__email=email
  
  def getNome(self):
    return self.__nome

  def getEmail(self):
    return self.__email
  
  def setNome(self, nome):
    self.__nome = nome
  
  def setEmail(self, email):
    self.__email = email

  def __str__(self):
    return "({}, {})".format(self.__nome, self.__email)


