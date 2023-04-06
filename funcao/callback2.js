const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i]) // adiciona elementos no array (no final teremos todas as notas abaixo )
         
    }
}

console.log(notasBaixas)

// Com callback
 const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

// função arrow e callback
const notasBaixa3 = notas.filter(nota => nota < 7)
console.log(notasBaixa3);
//filter é uma função que vai filtrar os elementos de um array 