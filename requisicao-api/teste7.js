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
        redirec: "follow"
    }

    fetch("http://qas-abctech.ddns.net:8080/jarvis/oauth/token", requestOptions)
        .then(resp => resp.json())
        .then(resul => localStorage.setItem("token", resul.access_token))
}

gerarToken()


function cadastroCliente() {
    let myheaders = new Headers()
    token = localStorage.getItem("token")
    myheaders.append("Authorization", `Bearer ${token}`)
    myheaders.append("Connection", "keep-alive")
    myheaders.append("Content-Type", "application/json")
    myheaders.append("X-stuff-code", "c-cli-finan-01")


    let filter = JSON.stringify({
        "filters": []
    })

    requestOptions = {
        method: "POST",
        headers: myheaders,
        body: filter
    }

    fetch("http://qas-abctech.ddns.net:8080/jarvis/api/stuff/data/filter-entities", requestOptions)
    .then(resp => resp.json())
    .then(resul => console.log(resul))

}

cadastroCliente()