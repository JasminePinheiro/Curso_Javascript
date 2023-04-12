console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)


// todos esses três tem um atributo chamado .Prototype
// todas as funções tem esse atributo

// vamos reveter uma string. A possibilidade de inserir novas funções nos protótipos
String.prototype.reverse = function () {
    return this.split('').reverse() // estou separando cada letra, invertendo o array e depois fazendo a junção novamente
}

console.log('Faculdade IFSP'.reverse())

Array.prototype.first = function () {
    return this[0] // irá retornar o primeiro elemento do vetor
}

console.log([1,2,3,4,5].first())
console.log(['a', 'b', 'c'].first())


// ERROOO, não substitua compotamentos, já existe esse método chamado de String
String.prototype.toString = function () { // estou sobrescrevendo a função String
    return 'Lascou Tudo' 
}

console.log(''.reverse())