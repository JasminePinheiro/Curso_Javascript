let a = 1
console.log(a)

let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa({
        x: 3,
        y: 4
    })
}) // é uma promessa que vai me dá um dado no futuro 

p.then(function(valor){
    console.log(valor)
})


let b = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Joyce', 'Jasmine', 'Laryssa'])

}) // é uma promessa que vai me dá um dado no futuro 

b
.then(valor => valor[0])
.then(primeira => primeira[0])
.then(letra => letra.toLowerCase())
.then(letraminuscula => console.log(letraminuscula))


let c = new Promise(function(resolve) {
    teste(['Mine', 'Ana', 'Sandra'])
})

c 
 .then(palavra => palavra[0])
 .then(nome => console.log(nome))