// Seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

// Funções
const saveTodo = (text) =>{
    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text
    todo.appendChild(todoTitle)

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn)

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("remove-todo")
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deleteBtn)

    todoList.appendChild(todo)
    todoInput.value = ""
    todoInput.focus()
}
// Eventos
todoForm.addEventListener("submit", (e) => {
    const valorInput = todoForm.valor.value
    // alert(valorInput.length)
    switch (valorInput.length) {
        case valorInput.length == 3:
                alert('essa string tem apenas 3 numeros ou letras');
            break;
    
        default:
            alert('nao é correspondente')
            break;
    }
    e.preventDefault() // o formulario não vai ser enviado após clicar no botão 

    const inputValue = todoInput.value // pegando o valor do usuário
    if (inputValue) {
        saveTodo(inputValue)
    }
})

document.addEventListener("click", (e)=>{
    const targetEl = e.target 
})
