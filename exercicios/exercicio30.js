function somarNumeros(x) {
    let resultado = 0

   x.forEach(y => resultado += y)

    return resultado
}

console.log(somarNumeros([10, 1000, 10]))