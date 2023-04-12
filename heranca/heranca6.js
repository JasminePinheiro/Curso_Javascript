// uma função construtora
function Aula(nome, videoID) {
    this.name = nome
    this.videoID = videoID
}

// usar o operador new em aula e consegui instaciar objetos através dessa função 
const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

// usamos o operador new para criar um novo objeto para a função Aula. Além disso, o protótipo deste objeto que foi criado também aponta para a função aula.prototype



// função que simula o operador new 
function novo(f, ...params) { // vai receber a função construtora e um conjuto de parâmetros 
    const obj = {} // primeiro passo é criar um objeto vazio 
    obj.__proto__ = f.prototype // segundo passo é fazer com que o obj.__proto aponte para a função f.prototype
    f.apply(obj, params) // vai executar a função f, passando o objeto e os parâmetros que recebemos através do método novo
    return obj // no final retornamos o objeto 
}

const aula3 = novo(Aula, 'Bom dia', 123)
const aula4 = novo(Aula, 'Seja Bem-Vindo', 456)

console.log(aula3, aula4)
