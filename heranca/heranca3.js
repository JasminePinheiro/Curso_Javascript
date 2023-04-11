const pai = { nome: 'Pedro', corCabelo: 'Preto' }

const filha1 = Object.create(pai) // protótipo
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Ana', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla' // não tem como sobrescrever um nome em cima de outro
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`) // ela vai usar a cor de cabelo que veio da função pai

for (let key in filha2) {  
       filha2.hasOwnProperty(key) ? // se a propriedade pertencer a ela, vai imprimir na tela, caso contrário vai ser passada por herança 
    console.log(key) : console.log(`Por herança  ${key}`)
        
}