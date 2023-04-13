const pessoas = ['Jasmine', 'Julia', 'Ana', 'Clara']
pessoas.pop() // vai apagar o último elemento
console.log(pessoas)

pessoas.push('Akira') // vai acrescentar um elemento na última posição

pessoas.shift() // vai apagar o primeiro elemento do array
console.log(pessoas)

pessoas.unshift('Beatriz') // vai acrescentar um elemento na primeira posição 
console.log(pessoas)

// adicionando elementos antes do indice dois, neste caso não iremos apagar nenhum elemento
pessoas.splice(2, 0, 'Yara', 'Matheus')
console.log(pessoas)

pessoas.splice(2, 1) // o elemento dois irá ser apagado
console.log(pessoas)

const algumasPessoas = pessoas.slice(2) // ele vai criar um novo array a partir do índice 2
console.log(algumasPessoas)

const algumasPessoas2 = pessoas.slice(1, 4) // ele vai criar um novo array a partir do indice 1, e vai apagar o elemento que se encontra no índice 4
console.log(algumasPessoas2)