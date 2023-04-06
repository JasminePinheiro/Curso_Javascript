// Cadeia protótipos (prototype chain)
Object.prototype.attr0 = 'Z' // Até podemos atribuir valores ou comportamento para o Object.prototype.attr0 = 'Z', porém não é recomendável
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr0) // vai retornar Z, ele vai procurar primeiro no objeto filho e se não achar o attr0, ele vai procurar nos outros objetos, seguindo a hieráquia
console.log(filho.attr1, filho.attr2, filho.attr3)


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}K/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing, essa constante vai sobrepor os valores do carro
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`// o super serve para usar os status do nosso protótipo pai
    }
}

Object.setPrototypeOf(ferrari, carro) // nesse momento foi estabelecido uma relação entre ferrari e carro, visto que ferrari tem o protópio carro
Object.setPrototypeOf(volvo, carro) // volvo tem o carro como o seu protótipo

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())


ferrari.acelerarMais(300)
console.log(ferrari.status())

/*
*  O filho tem como protótipo pai 
*  O pai tem como protótipo avo
*  O avo tem como protótipo Object.Prototype
*/

/*
*  O avo tem o atributo A
*  O pai tem o atributo B
*  O filho tem o atributo C
*/