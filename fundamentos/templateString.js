const nome = 'Jasmine';
const concatenacao = 'Olá o meu nome é ' + nome
const template = `
    Olá meu nome é 
    ${nome}!
`
console.log(concatenacao, template);
console.log(`1 + 1 = ${1+1}`);
const up = texto => texto.toUpperCase()
console.log(`Ei.. ${up('cuidado')}!`)


const maiuscula = texto => texto.toUpperCase()
console.log(maiuscula('casa'));

// O Template String permite dar quebra de linhas e espaçamentos 
// Para usar essa função é preciso iniciar com (``) chamado de acento grave