const valor = `Global`
function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()

// Contexto léxico: Contexto de como as coisas foram declarada em seu programa

// A função carrega com ela o local que ela foi declarada, por causa do contexto léxico do javascript 