// é só uma forma diferente de escrever uma função

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

//Herança
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) // estamos chamando a super classe que neste caso seria o Avô
        this.profissao = profissao
    }
}

// quando fazemos o this.profissão, estamos atribuindo para o objeto que foi instanciado, com o atributo profissão 
// é importante colocar o this para consegui referenciar a class

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)