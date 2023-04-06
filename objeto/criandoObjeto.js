// Vários jeitos de criar um objeto 

// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object) // typeof Object == é uma função - typeof new Object == objeto
const obj2 = new Object
console.log(obj2)


// Funções construtoras
function Produto(nome, preco, desc) { // preco e desc estão encapsulados (visíveis apenas nessa função)
    this.nome = nome // a variavel nome está visivel de forma global
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 29898.89, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30 ) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Jasmine', 7894, 7)
const f2 = criarFuncionario('Ana', 15464, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.creat 
const filha = Object.create(null) 
filha.nome = 'Jasmine'
console.log(filha)

// Função que retona um objeto
const fromJson = JSON.parse('{info "Sou um Json"}')
console.log(fromJson.info)