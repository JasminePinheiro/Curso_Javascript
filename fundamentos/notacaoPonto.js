console.log(Math.ceil(6.1))
// O ceil tem a função de arredondar um número

const obj1 = {}
obj1.nome = 'Bola' // preferivel usar esse tipo de notação
//obj1['nome'] = 'Bola2' 
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome // usando a palavra 'this' o atributo ficará público 
    this.exec = function() {
        console.log('Exe..')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
const obj4 = new Obj
console.log(obj2.nome)
console.log(obj3.nome)
obj4.exec()