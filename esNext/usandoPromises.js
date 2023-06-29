// com  promise

const http = require('http')

const getUser = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados // vai compando os dados aos pouquinhos
            })

            res.out('end', () => {
                try {
                    resolve(JSON.parse(resultado)) //transformando em um objeto
                } catch (e) {
                    reject(e)
                }

            })
        })
    })
}


// let obterUser = async() => {
//     const ta = await getUser()
// }