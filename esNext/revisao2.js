// Arrow Function ( funções em uma única linha)
const soma = (a, b) => a + b
console.log(soma(2,3));


// Arrow Function (this)
const lexico = () => console.log(this === exports)
lexico()


// parametro default
function log(texto = 'Mine') {
   console.log(texto) 
}

log()

// operador rest (ele junta os valores)
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2,3,4,5));