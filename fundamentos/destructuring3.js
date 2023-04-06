function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 10 }
console.log(rand(obj))

// Ou podemos atribuir apenas o valor min ou max
console.log(rand({min: 100})) // atribuindo apenas o valor min. Sendo que o valor max já foi inicializado como padrão 1000
