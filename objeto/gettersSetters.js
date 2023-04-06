// método getter para ler os dados

// método setter para atulizar os dados
const sequencia = {
    _valor: 1, //convenção (essa constante apenas se encontra nesse escopo)
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 3000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 3000
console.log(sequencia.valor, sequencia.valor)

// Javascript não suporta vários métodos com o mesmo nome e parâmetros diferentes 
// get e set são funções que acessa os nossos valores. A vantagem é que podemos fazer tratamento em nossos dados 
// ou seja o get e o set serve para criar algum tipo de validação

