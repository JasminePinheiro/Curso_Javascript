Array.prototype.map2 = function (callback) {
    const newArray = [] // criei um array vazio, lembrando que o map não modifica o array atual, então por isso precisamos criar um novo.
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this)) // elemento atual, o indice e o array inteiro
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 14.50 }',
    '{ "nome": "Caneta", "preco": 16.80 }'
]

// Retornar um array apenas com os preços 

const paraObjeto = json => JSON.parse(json)  // está convertendo o texto para o objeto
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)