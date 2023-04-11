/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

function planoTrabalho(salario, aumento) {
    switch (aumento) {
        case 'a':
            return ` O novo salário com o aumento é ${salario * 0.10 + salario}`
        case 'b':
            return ` O novo salário com o aumento é ${salario * 0.15 + salario}`
        case 'c':
            return ` O novo salário com o aumento é ${salario * 0.20 + salario}`
        default:
            return 'O plano é inválido'
    }
}

console.log(planoTrabalho(1000, 'a'))
console.log(planoTrabalho(1000, 'b'))
console.log(planoTrabalho(1000, 'c')) 
console.log(planoTrabalho(1000, 'd')) 