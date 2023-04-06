// estrategia 1 para gerar valo padrão
function soma(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma(), soma(2), soma(3), soma(2,2,3));

// valor padrão do es2015 (versão mais nova) -> a mais indicada
function soma2(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma2(2,2,2));