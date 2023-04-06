// maneiras de reduzir as funções

let dobro = function (a) {
    return 2 * a 
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a
console.log(dobro(Math.PI)) // retorno implícito 


/*  Benefícios de usar o arrow
*   O this não irá variar 
*   Mais prático por não precisar usar o bloco
*/
