/* A linguagem JavaScript é uma linguagem fracamente tipada, isso faz com que ela seja muito dinâmica e flexível,
só que as vezes queremos prender essa liberdade */

//Object.preventExtenions (ele vai evitar/prevenir que o nosso objeto seja estendido, ou seja não poderemos aumentar a quantidade de atributos)
const produto = Object.preventExtensions({
    nome: 'Teclado Mercânico',
    preco: 200,
    tag: 'Promoção'
})
console.log('Extensíve: ', Object.isExtensible(produto))  // essa função testa para saber se este objeto é extensivo ou não == neste caso foi retornado false

// O objeto NÃO está congelado como quando usamos o Object.freeze(obj), então podemos alterar os nomes dos atributos e apagar eles tbm.
// Neste cenário o que a gente NÃO pode fazer é acrescentar novos atributos
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' // não vai aparecer no console
delete produto.tag
console.log(produto)

/*------------------------------------------------------------------------------------------------------------------------- */ 

// Object.seal (NÃO conseguimos adicionar ou excluir os atributos, mas podemos alterar os nomes deles)
const pessoa = { nome: 'Jasmine', idade: 21}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa)) // teste para saber se o objeto está selado

pessoa.nome = 'Julia'
pessoa.idade = 19
pessoa.altura = 1.65 // não vai aparecer no console
delete pessoa.nome // não podemos apagar
console.log(pessoa)

/*------------------------------------------------------------------------------------------------------------------------- */ 

// Object.freeze = selado + valores constantes (NÃO conseguimos adicionar, excluir e nem alterar os valores dos atributos == totalmente congelado)
const animal = { raca: 'Bulldog-Campeiro.', valor: 1000}
Object.freeze(animal)
console.log('Congelado:', Object.isFrozen(animal)) // teste para saber se o objeto está congelado

animal.raca = 'Shih-Tzu' // não podemos alterar
animal.valor = 1500
animal.idade = 1.65 // não vai aparecer no console
delete animal.raca // não podemos apagar
console.log(animal)

/*---------------------------------------------------------------------------------------------------------------------------*/