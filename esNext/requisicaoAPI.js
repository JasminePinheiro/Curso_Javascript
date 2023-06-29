// sem promise..
function api () {
fetch("https://jsonplaceholder.typicode.com/posts")
.then(resp => resp.json())
.then(result => console.log(result))
}

api()


