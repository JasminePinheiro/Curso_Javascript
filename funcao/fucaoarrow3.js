let comparaComThis = function (param) {
    console.log(this === param) // o this se encontra no escopo global

}
comparaComThis(global) // true

const obj = {}
comparaComThis = comparaComThis.bind(obj) // o this não está apontando para o obj
comparaComThis(global) // false
comparaComThis(obj) // true

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // false
comparaComThisArrow(module.exports) // true

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // false
comparaComThisArrow(module.exports) // true

/* O this de uma função arrow é associado ao contexo que a função foi escrita,
ou seja mesmo que a gente force com bind, ele sempre vai apontar para o 
atributo original*/
