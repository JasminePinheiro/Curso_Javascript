const pessoa = {
    nome: 'Ana ',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 4464
    }
}

const { nome, idade, endereco } = pessoa // estamos dizendo para tirar do objeto pessoa os atributos nome e idade
// desse jeito conseguimos imprimir os atributos que tiramos
console.log(nome, idade)

// maneira de modificar os nomes dos atributos
const { nome: n, idade: i } = pessoa
console.log(n, i)


