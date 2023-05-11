function validaCNPJ(cnpj) {
  // remove caracteres especiais do CNPJ
  cnpj = cnpj.replace(/[^\d]+/g, '');
 
  // Verifica se o CNPJ possui 14 caracteres
  if (cnpj.length !== 14) {
    return false;
  }



/[^ ]+$/
  // Verifica se todos os caracteres são iguais
  if (/^(\d)\1+$/.test(cnpj)) {
    return false;
  }

  // Verifica se os dois dígitos verificadores são válidos
  var tamanho = cnpj.length - 2;
  var numeros = cnpj.substring(0, tamanho); //método extrai caracteres, entre dois índices (posições), de uma string e retorna a substring
  var digitos = cnpj.substring(tamanho);
  var soma = 0;
  var pos = tamanho - 7;
  for (var i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }
  var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado !== parseInt(digitos.charAt(0))) {
    return false;
  }

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (var i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado !== parseInt(digitos.charAt(1))) {
    return false;
  }

  // CNPJ válido
  return true;
}


if (validaCNPJ("54.545.086/0001-67")) {
  console.log("CNPJ valido");
} else {
  console.log("CNPJ invalido");
}

valor = valor.replace(/[^\d]+/g,'')
