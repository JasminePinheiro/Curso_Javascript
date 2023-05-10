// Cadastro Nacional de Pessoa Jurídica

var cnpj = "22.247.559/0001-53";
function valida_cnpj(cnpj) {
    let numeros = cnpj.split("-")[0].replace(/[.|\/]/g, "");
    //console.log(numeros);
    let digitos = cnpj.split("-")[1]; // 06
    //console.log(digitos);
    if (getPrimeiroDigito(numeros) != digitos[0])
        return "CNPJ(" + cnpj + ") - Inválido";
        if (getSegundoDigito(numeros+""+digitos[0]) != digitos[1])
        return "CNPJ(" + cnpj + ") - Inválido";
    return "CNPJ(" + cnpj + ") - Válido";
}


function getPrimeiroDigito(numeros) {
    let peso = 2;
    let resultado = 0;
    for (let i = numeros.length - 1; i >= 0; i--) {// ela vai me retornar a quantidade de números do elemento -1 

        resultado += numeros[i] * peso;
        console.log(numeros[i]+" x "+ peso + " = " + resultado);
        peso = (peso == 9 ? 2 : peso+1)
    }
    modulo = resultado % 11;
    console.log(modulo);
    resultado = (modulo < 2 ? 0 : 11 - modulo)
    return resultado;
}
function getSegundoDigito(numeros) {
    let peso = 2;
    let resultado = 0;
    for (let i = numeros.length - 1; i >= 0; i--) {// ela vai me retornar a quantidade de números do elemento -1 

        resultado += numeros[i] * peso;
        console.log(numeros[i]+" x "+ peso + " = " + resultado);
        peso = (peso == 9 ? 2 : peso+1)
    }
    modulo = resultado % 11;
    //console.log(modulo);
    resultado = (modulo < 2 ? 0 : 11 - modulo)
    return resultado;
}
console.log(cnpj);
console.log(valida_cnpj(cnpj));

// split ele divide o array, nesse caso até o -, começando pelo elemento 0
// replace(/[.]/g); ele vai remover os ponto e os traços, e vai substituir por vazio

