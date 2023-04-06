// Gerando números aleatórios

/*function getInteiro({ min, max }) {
    const valor = Math.random() * (max - min) - min
    return Math.floor(valor)
}

const obj = { min: 100, max: 1000 }
console.log(getInteiro(obj))

// ******* Usando o Do While *******

function aleatorio(min, max) {
    const valor = Math.random() * (max - min) - min
    return Math.floor(valor)
}
let opcao = 0
do {
    opcao = aleatorio(-1, 10)
    console.log(`Opção escolhida foi: ${opcao}.`);
} while (opcao != -1)*/


let contador = 1

while (contador < 10) {
    console.log(`Contador: ${contador}`)
    contador++
}