function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`  // se não for um número retorne o próprio valor, caso ao contrário ele vai aplicar uma máscara adicionando duas casas decimais 
        resultado.push(partes[indice],valor)
    })
    return resultado.join('') // vai fazer a junção do valor o do indice
}

const preco = 29.9
const precoParcela = 11
console.log( real `1x de ${preco} ou 3x de ${precoParcela}.`) // ele vai aparecer já formatado