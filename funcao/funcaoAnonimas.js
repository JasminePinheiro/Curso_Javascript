const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)

// função anônima é aquela que não tem nenhum nome, normalmente a gente atribui a uma variável ou constante