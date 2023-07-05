// Desenvolver uma função que receba dois números como parâmetro e multiplique eles sem usar o operador de multiplicação 

function multiplicacao(x, y) {
   resultado = 0
   
   for (let i = 0; i < y; i++) {
        resultado += x    
   }

   return resultado
}

console.log(multiplicacao(446, 2))