/*function Pessoa() { // função chamada pessoa 
    this.idade = 0 // atributo chamado idade
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) // essa função vai se disparada a cada um segundo (temporizador)
}

new Pessoa*/

/* Segunda forma */
function Pessoa() { // função chamada pessoa 
    this.idade = 0 // atributo chamado idade
    
    const self = this // o this vai está sempre apontado para o mesmo objeto 
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }, 1000) // essa função vai se disparada a cada um segundo (temporizador)
}

new Pessoa