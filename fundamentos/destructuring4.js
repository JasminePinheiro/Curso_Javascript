
//GERANDO NÚMEROS ALEATÓRIOS
function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] // se caso o valor min for maior que o valor max, ele vai inverter as posições
    const valor = Math.random() * (max - min) + min // vai gerar um número aleatório 
    return Math.floor(valor) // floor vai pegar o valor e arredondar para baixo
}

console.log('\nValores aleatórios');
console.log(rand([50, 40]))

/***********TRABALHANDO COM PONTO FLUTUANTE*************/
console.log('\nPonto flutuante');
let num = 10
let num2 = 4
total = num / num2

console.log(total) // valor original(como ponto flutuante)

console.log(Math.floor(total)) // arredonda o valor para baixo

console.log(Math.ceil(total)) // arredonda o valor para cima