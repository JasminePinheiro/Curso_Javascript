console.log(typeof Array, typeof new Array, typeof [])
/* 
* o array literal tbm é um objeto
* o array é um objeto só que invés de organizar os dados através de seus atributos e chaves identificadoras,
* ele irá organizar os seus dados a partir de uma estrutura indexada começando do zero */

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

let aprovado = ['Carlos', 'Ana', 'Bia']
console.log(aprovado[0])
console.log(aprovado)
console.log(aprovado[5]) // não existe

aprovado[3] = 'Paulo' // adicionando o paulo no indice 3
aprovado.push('Abia') // adicionando no indice 4

console.log(aprovado.length) // tamanho do array
console.log(aprovado)

aprovado.sort() // vai ordenar os elementos
console.log(aprovado)

delete aprovado[1]
console.log(aprovado)

aprovado.splice(1, 2, 'Elemento1', 'Elemento2') // primeiro número é o que iremos trabalhar, o segundo é o que vamos excluir, e podemos adicionar tbm
console.log(aprovado)



