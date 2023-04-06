// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3)

// Aramezenando uma função arrow em uma variável
// arrow == é o jeito de resumir ainda mais uma função 
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3))


// retorno implícito (maneira de resumir ainda mais uma função)
const subtracao = (a, b) => a - b
console.log(subtracao(8, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!')


