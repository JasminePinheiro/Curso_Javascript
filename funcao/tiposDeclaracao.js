console.log(soma(3,4)) // pode chamar a função em qualquer lugar 

// function declaration
function soma(x, y) {
    return x + y
}



// fuction expression
const sub = function (x, y) { // função anônima
    return x - y
}
console.log(sub(8,4)) // chamar depois do bloco da função 



// named fuction expression
const mult = function mult(x, y) { //forma pouco usada
    return x * y
}
console.log(mult(3,4)) // chamar depois do bloco da função 
