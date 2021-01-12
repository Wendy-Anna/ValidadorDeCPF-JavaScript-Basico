function validaCPF(cpf) {
  if (cpf.length != 11) {
    return false;
  } else {
    var numeros = cpf.substring(0, 9);
    var digitos = cpf.substring(9);

    var soma = 0;
    for (var i = 10; i > 1; i--) {
      soma += numeros.charAt(10 - i) * i;
    }

    var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    //Validação do Primeiro Digito
    if (resultado != digitos.charAt(0)) {
      return false;
    }

    soma = 0;
    numeros = cpf.substring(0, 10);

    for (var w = 11; w > 1; w--) {
      soma += numeros.charAt(11 - w) * w;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    //Validação do Segundo Digito
    if (resultado != digitos.charAt(1)) {
      return false;
    }

    return true;
  }
}

function validacao() {
  console.log("Iniciando validação de CPF");
  var cpf = document.getElementById('cpf_digitado').value;
  var resultadoValidacao = validaCPF(cpf);

  if (resultadoValidacao) {
    document.getElementById('success').style.display = 'block';
  } else {
    document.getElementById('error').style.display = 'block';
  }
}