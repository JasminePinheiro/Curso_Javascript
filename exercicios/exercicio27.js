// tranformando um objeto em um array
function objetoParaArray(objeto) {
    let resultado = []
    
    for (let chave in objeto) {
        resultado.push([chave, objeto[chave]])
    }
    return resultado
}


console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}))