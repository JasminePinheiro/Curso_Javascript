function getInteiro(min, max) {
    const valor = Math.random() * (max - min) - min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiro(-1, 10)
    console.log(`Opção escolhida foi: ${opcao}.`)
}

console.log('Até que fim acabou');



/* A função Math.random() gera um número aleatório entre 0 e 1, 
* por isso devemos multiplicar * (max - min), para o resulltado ser um número maior
* Exemplo1: Se o random gerar o número 0 ele vai fazer a multiplicação, e como qualquer número multiplicado por 0 é igual a 0, 
* o resultado final - min, será o valor mínimo.
*       0 * (500 - 200) - 200
        RESULATADO: 200

* Exemplo2: Se o random gerar o número 1 ele vai fazer a multiplicação através do interválo e o resultado final é, será o valor máximo
        1 * (500 - 200) + 200
        RESULATADO: 500
*/