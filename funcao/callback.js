const fabricantes = ["Mercedes", "Audio", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`) 
}

fabricantes.forEach(imprimir)
// chama a função novamente
// para cada elemento do array ele chama a função de volta 





// no formato arrow
fabricantes.forEach(fabricante => console.log(fabricante))