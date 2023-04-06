// coleção dinâmica você pode adicionar mover de pares chave/valor.
const produto = new Object
produto.nome = 'Cadeira'
produto['marca de produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
console.log(produto)

//objeto carro
const carro = {
    modelo: 'Celta',
    valor: 89000,
    proprietario: {
        nome: 'Jasmine',
        idade: 21,
        endereco: {
            logradouro: 'Rua das princesas',
            numero: 81,
            cep: 07474 - 440
        }
    },
    condutores: [{
        nome: 'Jasmine Pinheiro',
        idade: 21,
    }, {
        nome: 'Joyce',
        idade: 24
    }],
    calcularValorSeguro: function () {

    }
}

carro.proprietario.endereco.numero = 1000
//carro['propriedade']['endereco'] ['logradouro'] = 'Rua Linda'
console.log(carro)
console.log(carro.condutores.length) // retorna a quantidade de elementos que tem no array 2
