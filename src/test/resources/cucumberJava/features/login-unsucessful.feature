# language: es
Característica: Login sin exito

Esquema del escenario:login incorrecto 0

Dado que me conecte a la aplicacion

Cuando introduzco usuario <login> y contraseña <pass>

Entonces no me dejara entrar a la aplicacion
  Ejemplos:
    |  login        |  pass        |
    |  "trytryte"   |  "trytryte"  |
    |  ""           |  ""          |
    |  "pepepotamo" |  ""          |
    |  "77001622Z"  |  ""          |
    |  ""           |  "Ibermatica"|

#Escenario:login incorrecto 1

#Dado que me conecto a la aplicacion

#Cuando introduzco usuario "trytryte" y contraseña "trytryte"

#Entonces no me deja entrar a la aplicacion

#Escenario:login incorrecto 2

#Dado que me conecto a la aplicacion

#Cuando introduzco usuario "" y contraseña ""

#Entonces no me deja entrar a la aplicacion

#Escenario:login incorrecto 3

#Dado que me conecto a la aplicacion

#Cuando introduzco usuario "pepepotamo" y contraseña ""

#Entonces no me deja entrar a la aplicacion

#Escenario:login incorrecto 4

#Dado que me conecto a la aplicacion

#Cuando introduzco usuario "" y contraseña "pepe"

#Entonces no me deja entrar a la aplicacion

