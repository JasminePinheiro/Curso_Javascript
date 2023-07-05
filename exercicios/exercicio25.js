// Crie uma função que receba um array e retorne o primeiro e o último elemento desse array como um novo array 
function recebeUmArray(x) {

    const primeiroElemento = x.shift() // pega o primeiro elemento 
    const ultimoElemento = x.pop()     // pega o último elemento

    console.log(primeiroElemento, ultimoElemento);
}

recebeUmArray([2, 5, 10])
