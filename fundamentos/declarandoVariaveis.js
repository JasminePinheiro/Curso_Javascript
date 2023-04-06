// Diferença entre let X var

for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i); // ele não reconhece a variável 'i' 
// Let trabalha com escopo ou seja só reconhece a variável dentro do mesmo bloco


for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log('\ni =', i);
