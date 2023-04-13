// Forma de percorrer um array 
const aprovados = ['Jasmine', 'Ana', 'Matheus', 'Joana']

aprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)
