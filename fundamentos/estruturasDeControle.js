/*function nota(num) {
    if (num > 7); { // evitar de colocar ';' nas estruturas de controle, pq senão ele não considera o conteúdo restante da função (é como se ele estivesse dividindo o conteúdo em duas parte)  
        console.log("A nota é: ", num)
    }

}

function nota(num) {    // maneira certa de cria os blocos
    if (num > 7) {
        console.log("A nota é: ", num)
    }

}

nota(8)
nota(3)*/


Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log("Maravitop")
    } else if (nota.entre(7, 8)) {
        console.log("Ótimo")
    } else if (nota.entre(5, 6)) {
        console.log("Regular")
    } else {
        console.log("Reprovado")
    }
    console.log("fim")
}

imprimirResultado(7)
