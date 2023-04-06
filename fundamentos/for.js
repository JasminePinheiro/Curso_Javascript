
for (let i = 0; i < 10; i++) {
  console.log(`Contador ${i}`)

}

const notas = [5.6, 4.5, 8.9]
for (let i in notas) {
  console.log(i, notas[i])
}

const pessoa = {
  nome: 'Jasmine',
  sobrenome: 'Souza',
  idade: 21,
  peso: 57 

}
for (let atributo in pessoa){
  console.log(`${atributo} = ${pessoa[atributo]}`);
}


