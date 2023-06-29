/* REQUISIÇÃO  PARA GERAR UM TOKEN */

function gerarToken() {
    let myheaders = new Headers()
    myheaders.append("Authorization", "Basic d2ViQGphcnZpcy4yMDIxOkpjTko0ZkVT")

    let body = new URLSearchParams()
    body.append("username", "DEV-ZKR4:mab.admin")
    body.append("password", "m7e852e990")
    body.append("grant_type", "password")

    requestOptions = {
        method: "POST",
        headers: myheaders,
        body: body,
        redirect: "follow"
    }

    return fetch("http://qas-abctech.ddns.net:8080/jarvis/oauth/token", requestOptions)
        .then(resp => resp.json())
        .then(resultado => localStorage.setItem("token", resultado.access_token))
        .catch(Error => {
            console.log("Ocorreu um erro " + Error);
        })

}

gerarToken()

function cadastroCliente() {
    let token = localStorage.getItem("token")
    let myheaders = new Headers()
    myheaders.append("Authorization", `Bearer  ${token}`)
    myheaders.append("Content-Type", "application/json")
    myheaders.append("X-stuff-code", "c-fin-asses-01")

    let filter = JSON.stringify({
        "filters": []
    })

    requestOptions = {
        method: "POST",
        headers: myheaders,
        body: filter,
        redirect: "follow"
    }

    fetch("http://qas-abctech.ddns.net:8080/jarvis/api/stuff/data/filter-entities", requestOptions)
    .then(resp => resp.json())
    .then(resposta => console.log(resposta))
}

cadastroCliente()
/*
append(adicionar)
redirect: "follow": diz para a função seguir automaticamente qualquer redirecionamento que aconteça durante a solicitação 
Suponha que você queira acessar o site "www.example.com" usando a função fetch. No entanto, o site foi movido para uma nova localização e agora está em "www.newexample.com". Sem o redirect: 'follow', a função fetch retornaria um código de redirecionamento (por exemplo, 301) e você teria que lidar com isso manualmente.
Com o redirect: 'follow', a função fetch seguirá automaticamente o redirecionamento para você. Em vez de receber apenas o código de redirecionamento, você receberá a resposta do novo endereço "www.newexample.com". Isso economiza seu tempo e esforço, pois você não precisa lidar com o redirecionamento manualmente.

*/