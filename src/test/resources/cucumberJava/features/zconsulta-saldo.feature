# language: es

Característica:consulta de saldo

  Antecedentes:
    Dado que me conecte a la aplicacion



  Esquema del escenario: una vez logado consultar saldo

#Dado que me conecte a la aplicacion
#  Y para consultar cuentas introduje usuario <login> y contraseña <pass>
    Cuando introduzco usuario <login> y contraseña <pass>

Cuando pulso en cuenta

Entonces vere el saldo

  Ejemplos:
  |  login         |  pass        |
  |  "77001622Z"   |  "Ibermatica"  |