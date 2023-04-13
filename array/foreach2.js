Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this) // vamos chamar três parâmetros, o elemento, o indice, e o array inteiro
    }
}

const reprovado = ['Ana', 'Clara', 'Beatriz', 'Yara']

reprovado.forEach2(function (nome, indice) {
    console.log(`${indice + 1}) ${nome} `)
})
