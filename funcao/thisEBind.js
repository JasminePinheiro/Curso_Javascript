const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao);
    }
}
pessoa.falar()

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() 

/*  bind é um método usado por amarra um certo objeto
*/

fu