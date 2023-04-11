function MeuObjeto() {}
    console.log(MeuObjeto.prototype) // está dizendo que esse atribuito existe, e que esse atribuito é um objeto

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto)
// Uma vez que eu crio dois objetos diferentes a partir de uma mesma função construtora, os protótipo desse objetos apontam para o mesmo objeto por padrão

