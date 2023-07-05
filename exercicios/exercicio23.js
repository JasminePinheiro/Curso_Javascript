// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado. 

function repeticao(x, y) {
    let resultado = []  

    for (let i = 0; i < y; i++) {
        resultado.push(x)  // ele adiciona um ou mais elementos ao final do array 
    }

    return resultado

}

console.log(repeticao(44, 8))