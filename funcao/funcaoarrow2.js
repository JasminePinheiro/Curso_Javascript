 function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++ // o this não varia, isso é uma das grandes vantagens de usar o arrow 
        console.log(this.idade)
    }, 1000);
 }

 new Pessoa

