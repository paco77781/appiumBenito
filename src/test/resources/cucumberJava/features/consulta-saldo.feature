# language: es

Característica:consulta de saldo


Escenario: una vez logado consultar saldo

Dado que me conecto a la aplicacion
  Y para consultar cuentas introduzco usuario "77001622Z" y contraseña "Ibermatica"

Cuando pulso en cuenta

Entonces veo el saldo

