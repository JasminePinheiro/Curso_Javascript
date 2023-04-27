// constador ... rest(Juntar)/spread(espalhar)
// usar rest com parêmertro de função 

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12456 }
const clone = { ativo: true, ...funcionario } // estou espalhando todos os atributos do objeto funcionario
console.log(clone);

// usar spread com array
const grupoA = ['João', 'Ana', 'Felipa']
const grupoFinal = ['Maria', ...grupoA, 'Ana']
console.log(grupoFinal)

// estou espalhando dentro de um array todos os elementos de outro array 