/* 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false */

function verificarInteiro(numInteiro) {
    if (numInteiro % 3 == 0) {
        return true
    } else {
        return false
    }
}



function imprimiValores(numInteiro) {
    let valorVerificado = verificarInteiro(numInteiro)
    if (valorVerificado == true) {
        console.log(`O número ${numInteiro} é divisível por 3`);
    } else {
        console.log(`O número ${numInteiro} não é divisível`);
    }
}

imprimiValores(11)