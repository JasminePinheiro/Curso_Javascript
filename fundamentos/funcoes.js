// Funções sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3) // o certo é passar a quantidade certa de parâmetros
imprimirSoma(2, 10, 4, 5) // jeito errado 

// A linguagem javascript é fracamente tipada, então podemos passar mais parâmetros do que a função pede, porém não é recomendável 



// Função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2))
console.log(soma(2,3))