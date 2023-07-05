function receberSomentePares(array) {
    resultado = []

    for (let i = 0; i < array.length; i+=2) {
        const numeroPar = array[i] % 2 === 0
        if (numeroPar) {
            resultado.push(array[i])
        }
    }
    return resultado    
}




console.log(receberSomentePares([10, 70, 22, 43]))