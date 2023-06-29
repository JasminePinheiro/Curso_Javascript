function gerarToken() {
    let myheader = new Headers()
    myheader.append("Authorization", "Basic d2ViQGphcnZpcy4yMDIxOkpjTko0ZkVT")

    let body = new URLSearchParams()
    body.append("username", "DEV-ZKR4:mab.admin")
    body.append("password", "m7e852e990")
    body.append("grant_type", "password")

    requestOptions = {
        method: "POST",
        headers: myheader,
        body: body,
        redirect: 'follow'
    }

    fetch("http://qas-abctech.ddns.net:8080/jarvis/oauth/token", requestOptions)
    .then(resp => resp.json())
    .then(resultado => localStorage.setItem("token", resultado.access_token))
}


gerarToken()


function cadastroCliente() {
    let myheader = new Headers()
    let token = localStorage.getItem("token")
    myheader.append("Authorization", `Bearer ${token}`)
    myheader.append("Connection", "keep-alive")
    myheader.append("Content-Type", "application/json")
    myheader.append("X-stuff-code", "c-cli-finan-01")

    filter = JSON.stringify({
        "filters":[]
    })

    requestOptions = {
        method: "POST",
        headers: myheader,
        body: filter,
        redirect: 'follow'
    }

    fetch("http://qas-abctech.ddns.net:8080/jarvis/api/stuff/data/filter-entities", requestOptions)
    .then(resp => resp.json())
    .then(result => console.log(result))
}

cadastroCliente()