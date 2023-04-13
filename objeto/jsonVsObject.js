// JSON (JavaScript Object Notation) 
// É um formato textual que é diferente da notação literal objeto
// formato muito simples, onde todas as liguagens consegue ler, ele serve para comunicar sistemas que foram feitos com tecnologias diferentes. 

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj)) // a função foi excluída (trasnformando um objeto em Json)
console.log(obj)
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // transformando um Json em um objeto
// formatos que o Json suporta
console.log(JSON.parse('{ "a": 1, "b": "casa", "c": true, "d": {}, "e": []}')) // ele suporta array, objeto, string