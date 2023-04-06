
const imprimirResultado = function (nota) {
    switch (Math.ceil(nota)) {
        case 10: case 9:
            console.log("Maravitop")
            break
        case 8: case 7: 
            console.log("Ótimo")
            break
            case 6: case 5:
            console.log("Regular")
            break
        default:
            console.log("Reprovado")
            break
    }
}
imprimirResultado(4)
