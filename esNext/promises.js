// usado quando queremos ter algum comportamento assíncrono 
// ex: vamos supor que vamos acessar algum arquivo no formato remoto  

// Quando mandamos um e-mail e recebemos a resposta depois de um intervalo de tempo, estamos inseridos em um contexto de comunicação assíncrona, diferente do que ocorre em uma reunião com os colegas de escritório, ainda que seja on-line.


function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => { // retorna uma promessa
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)

    })

}

falarDepoisDe(3, "Oiie Pessoal")
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))

// resolve => quando a promessa é resolvida 
// reject => quando a promessa  é rejeitada

function falarDepoisDe2(segundos, frase) {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
        resolve(frase)
       }, segundos * 1000)
    })
}

falarDepoisDe2(3, "Hello people")
.then(frase => frase.concat("!!"))
.then(outraFrase => console.log(outraFrase))
.catch(e => console.log(e));


function falarDepoisDe3(tempo, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        })
    })
}



