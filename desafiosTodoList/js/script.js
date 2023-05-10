// --- Seleção de elementos ---
const todoForm = document.getElementById("todo-form")
const todoInput = document.getElementById("todo-input")
const todoList = document.getElementById("todo-list")
const editForm = document.getElementById("edit-form")
const editInput = document.getElementById("edit-input")
const cancelEditBtn = document.getElementById("cancel-edit-btn")
const searchInput = document.getElementById("search-input")
const eraseBtn = document.getElementById("erase-button")
const filterBtn = document.getElementById("filter")

let oldInputValue

// --- Funções ---
const saveTodo = (text, done = 0, save = 1) => {
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

    // usando o localStorage ** ps: é um objeto JavaScript que usamos para armazenar dados no navegador.
    if (done) {
        todo.classList.add("done")
    }

    if (save) {
        saveTodoLocalStorage({ text, done: 0 })
    }

    todoList.appendChild(todo)
    todoInput.value = ""
    todoInput.focus()
}

const toggleForms = () => {
    editForm.classList.toggle("hide") // ele vai mostrar ou desparecer os valores do formulario
    todoForm.classList.toggle("hide")
    todoList.classList.toggle("hide")
}

const updateTodo = (text) => {

    const todos = document.querySelectorAll(".todo")

    todos.forEach((todo) => {

        let todoTitle = todo.querySelector("h3") // estou pegando o titulo atual do todo que estou mapeando 

        if (todoTitle.innerText === oldInputValue) {
            todoTitle.innerText = text

            // Utilizando dados da LocalStorage
            updateTodoLocalStorage(oldInputValue, text)
        }
    })
}

const getSearchedTodos = (search) => { 
    const todos = document.querySelectorAll(".todo");
  
    todos.forEach((todo) => {
      const todoTitle = todo.querySelector("h3").innerText.toLowerCase(); // converte a string digitada para minuscula
  
      todo.style.display = "flex" // modificar o estilo do display
  
      console.log(todoTitle)
  
      if (!todoTitle.includes(search)) {
        todo.style.display = "none"
      }
    })
  }
  
  const filterTodos = (filterValue) => { 
    const todos = document.querySelectorAll(".todo")
  
    switch (filterValue) {
      case "all":
        todos.forEach((todo) => (todo.style.display = "flex"))
  
        break;
  
      case "done":
        todos.forEach((todo) =>
          todo.classList.contains("done")
            ? (todo.style.display = "flex")
            : (todo.style.display = "none")
        );
  
        break;
  
      case "todo":
        todos.forEach((todo) =>
          !todo.classList.contains("done")
            ? (todo.style.display = "flex")
            : (todo.style.display = "none")
        );
  
        break;
  
      default:
        break;
    }
  }
  

// --- Eventos---
todoForm.addEventListener("submit", (e) => {
    e.preventDefault() // o formulario não vai ser enviado após clicar no botão 

    const inputValue = todoInput.value // pegando o valor do usuário
   
    if (inputValue) {
        saveTodo(inputValue)
    }
})

// fazendo o mapeamento de cada click
document.addEventListener("click", (e) => { // evento de clique no documento todo
    const targetEl = e.target
    const parentEL = targetEl.closest('div'); // selecionando a div mais próxima (neste caso é o todo)
    let todoTitle

    if (parentEL && parentEL.querySelector("h3")) {
        todoTitle = parentEL.querySelector("h3").innerText
    }

    if (targetEl.classList.contains("finish-todo")) { // verificar se ele clicou em finalizar tarefa
        parentEL.classList.toggle("done")

        // Utilizando dados da LocalStorage
        updateTodoStatusLocalStorage(todoTitle);

    }

    if (targetEl.classList.contains("remove-todo")) { // deleta
        parentEL.remove()

        // Utilizando dados da localStorage
        removeTodoLocalStorage(todoTitle);

    }

    if (targetEl.classList.contains("edit-todo")) { // edita
        toggleForms() // ela vai esconder o formulario de adicionar tarefa e vai aparecer o formulario de editar tarefa 

        editInput.value = todoTitle // mudando o valor do input
        oldInputValue = todoTitle // salvando na memória
    }
})

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault() // não envia o formulario vazio
    toggleForms() // evitar repetição na função
})

editForm.addEventListener("submit", (e) => {

    e.preventDefault()

    const editInputValue = editInput.value

    // se o campo estiver vazio, ele não vai atulizar 
    if (editInputValue) {
        updateTodo(editInputValue)
    }

    toggleForms()

})

/* Porque usar toggle, ao invés de add ? 
add = faz a marcação de feito, porém não conseguimos desmarcar, já o toggle faz essa troca.
*/


searchInput.addEventListener("keyup", (e) => {
    const search = e.target.value;
  
    getSearchedTodos(search);
  });
  
  eraseBtn.addEventListener("click", (e) => {
    e.preventDefault();
  
    searchInput.value = "";  
  
    searchInput.dispatchEvent(new Event("keyup")); // ele é disparado quando a primeira tecla é digitada
  });

  /* obs:keyup(): o evento ocorre quando a tecla retorna à posição original no teclado (i.e. quando você solta a mesma). 
  keydown(): o evento ocorre quando a tecla é pressionada. O evento repete enquanto a tecla estiver pressionada (exceto para as teclas Ctrl, Alt e Shift)*/
  
  filterBtn.addEventListener("change", (e) => {
    const filterValue = e.target.value;
  
    filterTodos(filterValue);
  });
  
  // Local Storage
  const getTodosLocalStorage = () => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
  
    return todos;
  };
  
  const loadTodos = () => {
    const todos = getTodosLocalStorage();
  
    todos.forEach((todo) => {
      saveTodo(todo.text, todo.done, 0);
    });
  };
  
  const saveTodoLocalStorage = (todo) => {
    const todos = getTodosLocalStorage();
  
    todos.push(todo);
  
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  
  const removeTodoLocalStorage = (todoText) => {
    const todos = getTodosLocalStorage();
  
    const filteredTodos = todos.filter((todo) => todo.text != todoText);
  
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
  };
  
  const updateTodoStatusLocalStorage = (todoText) => {
    const todos = getTodosLocalStorage();
  
    todos.map((todo) =>
      todo.text === todoText ? (todo.done = !todo.done) : null
    );
  
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  
  const updateTodoLocalStorage = (todoOldText, todoNewText) => {
    const todos = getTodosLocalStorage();
  
    todos.map((todo) =>
      todo.text === todoOldText ? (todo.text = todoNewText) : null
    );
  
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  
  loadTodos();

