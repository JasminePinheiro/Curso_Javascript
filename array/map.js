// map serve para fazer uma tranformação no array
// a ideia é mapear um array e jogar em outro array com o mesmo tamanho com os dados transformados

const nums = [1, 2, 3, 4, 5]

// retornar o dobro
let resultado = nums.map(function (e) {
    return e * 2
})

console.log(resultado)
console.log(nums)

// obs: O map não transforma o array atual ele gera um novo array modificado

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

let resultado2 = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado2)


// parseFloat transforma o número em decimal