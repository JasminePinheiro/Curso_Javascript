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

    fetch("http://qas-abctech.ddns.net:8080/jarvis/oauth/token", requestOptions)
    .then(resp => resp.json())
    .then(resposta => localStorage.setItem("token", resposta.access_token))
}

gerarToken()