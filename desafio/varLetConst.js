/*
Diferença entre VAR, LET, CONST
Var e Let é bem semelhante a diferença é em relação ao escopo. 
Var: Uma variável global, independente de onde declaramos esta variável ela vai funcionar.
Let: Ela só vai funcionar no escopo que declaramos.
Const: Ela não pode ser atribuída, mas os seus valores podem ser modificados através de objeto. No entanto, os valores não podem ser modificados se for do tipo simples ex: float, inteiro
*/

// ---------------- VAR ---------------------
/*if (true) {
    let a = 10
    console.log(a) // CERTO
}

if (true) {
    var a = 10
}
console.log(a) // CERTO*/


// ---------------- LET ---------------------
/*if (true) {
    let a = 10
    console.log(a) // CERTO
}

if (true) {
    let a = 10
}
console.log(a) // ERRO*/

// ---------------- CONST ---------------------
// não podemos atribuir um valor novo a uma constante e também não podemos modificar valores do tipo simples,como inteiros, floats...
// mas podemos modificar valores dentro do objeto

/*if (true) { // A constante não pode ser atribuida mas pode ser modificada
    const a = {nome: "Jasmine"}
    a.nome = "Ana"
    console.log(a) // CERTO
}

if (true) { 
    const a = 10;
    a = 20;
    console.log(a); // ERRO
}*/



