$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('cucumberJava\features\consulta-saldo.feature');
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: es"
    }
  ],
  "line": 3,
  "name": "consulta de saldo",
  "description": "",
  "id": "consulta-de-saldo",
  "keyword": "Característica"
});
formatter.scenario({
  "line": 6,
  "name": "una vez logado consultar saldo",
  "description": "",
  "id": "consulta-de-saldo;una-vez-logado-consultar-saldo",
  "type": "scenario",
  "keyword": "Escenario"
});
formatter.step({
  "line": 8,
  "name": "que me conecto a la aplicacion",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "para consultar cuentas introduzco usuario \"77001622Z\" y contraseña \"Ibermatica\"",
  "keyword": "Y "
});
formatter.step({
  "line": 11,
  "name": "pulso en cuenta",
  "keyword": "Cuando "
});
formatter.step({
  "line": 13,
  "name": "veo el saldo",
  "keyword": "Entonces "
});
formatter.match({
  "location": "cucumberJava.openDevices()"
});
formatter.result({
  "duration": 40386583554,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "77001622Z",
      "offset": 43
    },
    {
      "val": "Ibermatica",
      "offset": 68
    }
  ],
  "location": "cucumberJava.I_enter_Usuario_as_and_Contrasena_as2(String,String)"
});
formatter.result({
  "duration": 14672859160,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.click_account()"
});
formatter.result({
  "duration": 5204571648,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.veo_saldo()"
});
formatter.result({
  "duration": 9684206385,
  "status": "passed"
});
formatter.uri('cucumberJava\features\login-successful.feature');
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: es"
    }
  ],
  "line": 3,
  "name": "Login con exito",
  "description": "",
  "id": "login-con-exito",
  "keyword": "Característica"
});
formatter.scenario({
  "line": 6,
  "name": "entrar a la aplicacion con usuario y contraseña correctos",
  "description": "",
  "id": "login-con-exito;entrar-a-la-aplicacion-con-usuario-y-contraseña-correctos",
  "type": "scenario",
  "keyword": "Escenario"
});
formatter.step({
  "line": 8,
  "name": "que me conecto a la aplicacion",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "introduzco usuario \"77001622Z\" y contraseña \"Ibermatica\"",
  "keyword": "Cuando "
});
formatter.step({
  "line": 12,
  "name": "entramos en la aplicacion",
  "keyword": "Entonces "
});
formatter.match({
  "location": "cucumberJava.openDevices()"
});
formatter.result({
  "duration": 37807421327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "77001622Z",
      "offset": 20
    },
    {
      "val": "Ibermatica",
      "offset": 45
    }
  ],
  "location": "cucumberJava.I_enter_Usuario_as_and_Contrasena_as(String,String)"
});
formatter.result({
  "duration": 14823176752,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.loginshouldbesuccessful()"
});
formatter.result({
  "duration": 29811119203,
  "status": "passed"
});
formatter.uri('cucumberJava\features\login-unsucessful.feature');
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: es"
    }
  ],
  "line": 2,
  "name": "Login sin exito",
  "description": "",
  "id": "login-sin-exito",
  "keyword": "Característica"
});
formatter.scenario({
  "line": 13,
  "name": "login incorrecto 0",
  "description": "",
  "id": "login-sin-exito;login-incorrecto-0;;2",
  "type": "scenario",
  "keyword": "Esquema del escenario"
});
formatter.step({
  "line": 6,
  "name": "que me conecto a la aplicacion",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "introduzco usuario \"trytryte\" y contraseña \"trytryte\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Cuando "
});
formatter.step({
  "line": 10,
  "name": "no me deja entrar a la aplicacion",
  "keyword": "Entonces "
});
formatter.match({
  "location": "cucumberJava.openDevices()"
});
formatter.result({
  "duration": 37569632509,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "trytryte",
      "offset": 20
    },
    {
      "val": "trytryte",
      "offset": 44
    }
  ],
  "location": "cucumberJava.I_enter_Usuario_as_and_Contrasena_as(String,String)"
});
formatter.result({
  "duration": 11314740744,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.loginshouldbeunsuccessful()"
});
formatter.result({
  "duration": 10250252205,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "login incorrecto 0",
  "description": "",
  "id": "login-sin-exito;login-incorrecto-0;;3",
  "type": "scenario",
  "keyword": "Esquema del escenario"
});
formatter.step({
  "line": 6,
  "name": "que me conecto a la aplicacion",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "introduzco usuario \"\" y contraseña \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Cuando "
});
formatter.step({
  "line": 10,
  "name": "no me deja entrar a la aplicacion",
  "keyword": "Entonces "
});
formatter.match({
  "location": "cucumberJava.openDevices()"
});
formatter.result({
  "duration": 37527096451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    },
    {
      "val": "",
      "offset": 36
    }
  ],
  "location": "cucumberJava.I_enter_Usuario_as_and_Contrasena_as(String,String)"
});
formatter.result({
  "duration": 9661228831,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.loginshouldbeunsuccessful()"
});
formatter.result({
  "duration": 10015822567,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "login incorrecto 0",
  "description": "",
  "id": "login-sin-exito;login-incorrecto-0;;4",
  "type": "scenario",
  "keyword": "Esquema del escenario"
});
formatter.step({
  "line": 6,
  "name": "que me conecto a la aplicacion",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "introduzco usuario \"pepepotamo\" y contraseña \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Cuando "
});
formatter.step({
  "line": 10,
  "name": "no me deja entrar a la aplicacion",
  "keyword": "Entonces "
});
formatter.match({
  "location": "cucumberJava.openDevices()"
});
formatter.result({
  "duration": 37776435627,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pepepotamo",
      "offset": 20
    },
    {
      "val": "",
      "offset": 46
    }
  ],
  "location": "cucumberJava.I_enter_Usuario_as_and_Contrasena_as(String,String)"
});
formatter.result({
  "duration": 10806910286,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.loginshouldbeunsuccessful()"
});
formatter.result({
  "duration": 10304976247,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "login incorrecto 0",
  "description": "",
  "id": "login-sin-exito;login-incorrecto-0;;5",
  "type": "scenario",
  "keyword": "Esquema del escenario"
});
formatter.step({
  "line": 6,
  "name": "que me conecto a la aplicacion",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "introduzco usuario \"77001622Z\" y contraseña \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Cuando "
});
formatter.step({
  "line": 10,
  "name": "no me deja entrar a la aplicacion",
  "keyword": "Entonces "
});
formatter.match({
  "location": "cucumberJava.openDevices()"
});
formatter.result({
  "duration": 37725809742,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "77001622Z",
      "offset": 20
    },
    {
      "val": "",
      "offset": 45
    }
  ],
  "location": "cucumberJava.I_enter_Usuario_as_and_Contrasena_as(String,String)"
});
formatter.result({
  "duration": 10684989410,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.loginshouldbeunsuccessful()"
});
formatter.result({
  "duration": 10241588047,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "login incorrecto 0",
  "description": "",
  "id": "login-sin-exito;login-incorrecto-0;;6",
  "type": "scenario",
  "keyword": "Esquema del escenario"
});
formatter.step({
  "line": 6,
  "name": "que me conecto a la aplicacion",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "introduzco usuario \"\" y contraseña \"Ibermatica\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Cuando "
});
formatter.step({
  "line": 10,
  "name": "no me deja entrar a la aplicacion",
  "keyword": "Entonces "
});
formatter.match({
  "location": "cucumberJava.openDevices()"
});
formatter.result({
  "duration": 37588796293,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    },
    {
      "val": "Ibermatica",
      "offset": 36
    }
  ],
  "location": "cucumberJava.I_enter_Usuario_as_and_Contrasena_as(String,String)"
});
formatter.result({
  "duration": 10566956712,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.loginshouldbeunsuccessful()"
});
formatter.result({
  "duration": 10089409755,
  "status": "passed"
});
});