// é uma estrutura de conjuntos
// não aceita repetição e também não é indexado
const times = new ()
times.add('Vasco')
times.add('São Paulo').add('Palmeras').add('Corinthians')
times.add('Flamengo')

console.log(times)
console.log(times.size) // vai retornar o tamanho
console.log(times.has('Vasco')) // retorna true or false

const comida = new ()

comida.add("Arroz").add("Feijão").add("Leite")
console.log(comida);


const cores = new ()
cores.add("Rosa").add("Vermelho").add("Preto")
console.log(cores);

