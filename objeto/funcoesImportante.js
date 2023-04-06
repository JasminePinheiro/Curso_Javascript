const pessoa = {
    nome: 'Jasmine',
    idade: 2,
    peso: 55
}

console.log(Object.keys(pessoa)) // vai imprimir na tela apenas os atributos
console.log(Object.values(pessoa)) // vai imprimir na tela apenas os valores de cada atributo
console.log(Object.entries(pessoa)) // vai imprimir na tela tudo que está entre as chaves

Object.entries(pessoa).forEach(([chave, valor]) => { // vai percorrer todos os elementos do array e vai imprimir na tela.
    console.log(`${chave}: ${valor}`)
})

// vamos inserir um novo atributo através da função defineProperty, com ela podemos criar validações específicas
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,  // propriedade que permite colocar o atributo na lista, ou seja deixar visível toda vez que formos usuar o Object.keys 
    writable: false,   // propriedade que permite alterar ou não o atributo
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017' // como colocamos a propriedade writable: false, NÃO CONSEGUIMOS SOBREPOR NENHUM VALOR EM CIMA DO QUE JÁ FOI DADO
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))  // como colocamos a propriedade enumerable: true, conseguimos visualizar o atributo na lista

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) // A função Object.assign concatena todos os dados que foram atribuidos
console.log(obj)

Object.freeze(obj) // está congelando o objeto ou seja não iremos conseguir mudar nenhum dado atribuido
obj.c = 1234 // não irá aparecer pq o objeto está congelao 
console.log(obj);