function validarBoleto(boleto) {
  // Removendo pontos e espaços do boleto
  boleto = boleto.replace(/\./g, '').replace(/ /g, '');

  // Verificando o tamanho do boleto
  if (boleto.length !== 47) {
    return false;
  }

  // Verificando o dígito verificador do primeiro bloco
  var dv1 = boleto.charAt(2);
  var dv1Calculado = calcularDigitoVerificador(boleto.substring(0, 2) + boleto.substring(3, 12));
  if (dv1 !== dv1Calculado) {
    return false;
  }

  // Verificando o dígito verificador do segundo bloco
  var dv2 = boleto.charAt(27);
  var dv2Calculado = calcularDigitoVerificador(boleto.substring(12, 27) + boleto.substring(28, 47));
  if (dv2 !== dv2Calculado) {
    return false;
  }

  return true;
}

function calcularDigitoVerificador(numero) {
  var soma = 0;
  var multiplicador = 2;

  for (var i = numero.length - 1; i >= 0; i--) {
    var algarismo = parseInt(numero.charAt(i), 10);
    soma += algarismo * multiplicador;

    multiplicador++;
    if (multiplicador > 9) {
      multiplicador = 2;
    }
  }

  var resto = soma % 11;
  var dv = 11 - resto;
  if (dv === 0 || dv === 10 || dv === 11) {
    dv = 1;
  }

  return dv.toString();
}

// Exemplo de uso
var boleto = '34191.75124 34567.871230 41234.560005 1 93460000026035';
if (validarBoleto(boleto)) {
  console.log('Boleto válido.');
} else {
  console.log('Boleto inválido.');
}
