class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {// a função que é chamada no momento em que a class for instanciada 
        this.nome = nome
        this.valor = valor
    }
} // estou adicionando ao objeto que está sendo instaciado um atributo nome que é exatamente o mesmo que eu recebi por parâmetro 

class cicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.mes = ano
        this.lancamento = []
    }
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamento.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
} 

const salario = new Lancamento('Salario', 1500)
const contaDeLuz = new Lancamento('Luz', -80)

const contas = new cicloFinanceiro(6, 2018) // mes de junho de 2018
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())
