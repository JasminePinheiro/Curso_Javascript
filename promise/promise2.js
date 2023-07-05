setTimeout(function () {
    console.log("Executando callback....");
    
    setTimeout(function () {
        console.log("Executando callback....");

    }, 2000)
}, 2000) 




// alt + setinhas move a instrucao
// alt + shift + setinhas + duplica a funcao 

setTimeout(function() {
    console.log("Hello");
})

// Executando de um jeito mais simples
function esperaPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function(){
            console.log("Executando2...");
            resolve("Eita")
        }, tempo)
    })
}

esperaPor(3000).then(texto => console.log(texto))


