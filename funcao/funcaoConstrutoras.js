function Carro(velocidadeMaxima = 200, delta = 5) { // toda vez que for acelerar vai ser de 5 em 5
    // atributo privado 
    let velocidadeAtual = 0

    // método público
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    // método público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro // primeiro objeto 
uno.acelerar() // res: 5
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(358, 20) // segundo objeto (nesse caso a velocidade máxima será 358, e o carro vai acelerar de 20 em 20)
ferrari.acelerar() // quanto mais vezes chamar a função, vai aumentando a aceleraçao 
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

