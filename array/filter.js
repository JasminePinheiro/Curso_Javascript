// maneira de modificar o array atual, criar um novo array 
// filtrar o array 
// *** percorrer o array apenas com o forEach ele só vai retornar os elemento do vetor

const produtos = [
    { nome: 'Notebook', preco: 4468, fragil: true},
    { nome: 'Ipad Pro', preco: 4646, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.45, fragil: true},
    { nome: 'Copo de Plástico', preco: 8.80, fragil: false }
]

console.log(produtos.filter(function(p) {
    return false 
}))

const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil 
console.log(produtos.filter(caro).filter(fragil))