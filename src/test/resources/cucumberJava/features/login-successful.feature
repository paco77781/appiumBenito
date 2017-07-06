# language: es
Característica:Login con exito

Antecedentes:
Dado que me conecte a la aplicacion



#Escenario: entrar a la aplicacion con usuario y contraseña correctos
  Esquema del escenario:login incorrecto 0
    Cuando introduzco usuario <login> y contraseña <pass>
Entonces entrare en la aplicacion
    Ejemplos:
      |  login         |  pass          |
      |  "77001622Z"   |  "Ibermatica"  |
