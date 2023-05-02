// tagged Template => processar a template string dentro de um função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Mine'
const situacao = 'Aprovada'
console.log(`${aluno} está ${situacao}.`) // ele vai usar os valores das constantes 


const aluno2 = 'Jas'
const situacao2 = 'Aprovada'
console.log(tag`${aluno2} está ${situacao2}.`)  
/* quando usamos o tag na frente, estaremos delimitando os valores es as partes 
 valores -> Jas Aprovada
 partes -> [ '', ' está ', '.' ]
*/