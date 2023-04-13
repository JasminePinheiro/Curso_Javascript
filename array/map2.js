const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 14.50 }',
    '{ "nome": "Caneta", "preco": 16.80 }'
]

// Retornar um array apenas com os preços 

const paraObjeto = json => JSON.parse(json)  // está convertendo o texto para o objeto
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)

