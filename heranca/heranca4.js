function MeuObjeto() { }
console.log(MeuObjeto.prototype) // está dizendo que esse atribuito existe, e que esse atribuito é um objeto

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__) // Uma vez que eu crio dois objetos diferentes a partir de uma mesma função construtora, os protótipo desse objetos apontam para o mesmo objeto por padrão
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Antônio'
MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar()
obj2.nome = 'Jasmine'
obj2.falar()
