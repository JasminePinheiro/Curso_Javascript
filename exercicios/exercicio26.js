// Crie uma função que receba um array de elemento e retorne um array somente com os números presentes no array recebido como parâmetro 
function recebeUmArray(a) {
    resultado = []
    for (const item of a) {
        if (typeof item === "number") {
            resultado.push(item)
        }
    }
    return resultado
}

console.log(recebeUmArray(['mine', 'jasmine', 'mineeeee', 44646, 64616]))