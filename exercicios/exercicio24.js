// Elabore uma funçao que recebe um número como parâmetro e retorne com o símbolo "+" na quantidade especifica no parametro

function simboloMais(x) {
    resultado = '+'
    contador = ' '
    for (let i = 0; i < x; i++) {
        contador += resultado
    }

    return contador
}

console.log(simboloMais(5))