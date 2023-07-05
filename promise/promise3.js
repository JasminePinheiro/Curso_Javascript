// Gerar um número entre dois valores 
// Se o usuário inverter os números, ele ainda consegue, gerar os números  
// function gerarNumeroEntre(min, max) {
//     if (min > max) {
//         [max, min] = [min, max]
//     }

//    return new Promise(resolve => {
//         const fator = max - min +  1 
//         const aleatorio = parseInt((Math.random() * fator) + min)
//         resolve(aleatorio)
//     })
// }

// gerarNumeroEntre(30, 40).then(console.log)



// function gerarNumeroEntre2(min, max) {
//     if (min > max) {
//         [max, min] = [min, max] 
//     }

//     return new Promise(resolve => {
//       let aleatorio = parseInt((Math.random() * (max - min + 1)) + min)      
//         resolve(aleatorio)
//     })
// }

// gerarNumeroEntre2(30, 40).then(console.log)


function gerarNumeroEntre3(min, max) {
    if (min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        let aleatorio = parseInt(Math.random() * (max - min + 1) + min)
        resolve(aleatorio)
    })
}

gerarNumeroEntre3(30, 41)
.then(numero => `O número gerado foi ${numero}`)
.then(console.log)
