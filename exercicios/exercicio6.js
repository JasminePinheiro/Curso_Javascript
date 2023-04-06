/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

function jurosSimples(capitalInicial, taxaJuros, tempAplicacao) {
    valorFuturo1 = capitalInicial * taxaJuros * tempAplicacao
        console.log("Financiamento com Juros Simples " + valorFuturo1)
}

function jurosComposto(capitalInicial, taxaJuros, tempAplicacao) {
    valorFuturo2 = capitalInicial * (1 + taxaJuros) ** tempAplicacao
    console.log("Financiamento com Juros Compostos " + valorFuturo2.toFixed(2))
}

jurosSimples(7000, 0.10, 5)
jurosComposto(6500, 0.10, 5)