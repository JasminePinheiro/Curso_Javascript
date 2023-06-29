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
        .then(result => localStorage.setItem("token", result.access_token))
        .catch(error => {
            console.log("Ocorreu um erro" + error)
        })

}

gerarToken()

function cadastroAAI() {

    let myheaders = new Headers()
    let token = localStorage.getItem("token")
    myheaders.append("Authorization", `Bearer ${token}`)
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
        .then(result => console.log(result))
        .catch(error => {
            console.log("Ocorreu um erro" + error);
        })

}

cadastroAAI()