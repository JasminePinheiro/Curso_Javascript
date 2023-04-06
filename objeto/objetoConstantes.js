// pessoa -> 123 {...}

// só podemos atribuir para uma constante apenas uma única vez
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 {...}
pessoa = { nome: 'Ana'} // vai dar erro, não podemos criar o objeto constante com o mesmo nome

Object.freeze(pessoa) // congelando o objeto pessoa, ou seja não podemos atribuir nenhum nome
pessoa.nome = 'Maria' // vai dar erro, pq não podemos mudar o nome do atributo e nem modificá-lo
console.log(pessoa.nome)