# language: es

Característica:consulta de saldo


Escenario: una vez logado consultar saldo

Dado que me conecte a la aplicacion
  Y para consultar cuentas introduje usuario "77001622Z" y contraseña "Ibermatica"

Cuando pulso en cuenta

Entonces vere el saldo

