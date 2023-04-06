// o objetivo da herança é justamente criar mercanismo na onde conseguimos reaproveitar códigos de uma função pai
// entre a herança e a composição é preferível usar a composição

const ferrari = {
    modelo: 'f40',
    velMax: 324
}

const volvo = {
    modelo: 'v40',
    velMax: 200
}

// criando um protótipo da ferrari
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ == Object.prototype)

