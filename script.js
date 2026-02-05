// // const todoList = [];
// // function addTodo(item) {
// //     todoList.push(item);
// //     console.log(`Added: ${item}`);
// // }

// // todo.js


// function addTodo() {
//     let input = document.getElementById("todoInput");
//     let task = input.value.trim();

//     if (task === "") {
//         alert("Enter a task");
//         return;
//     }

//     let li = document.createElement("li");
//     li.innerHTML = `
//         ${task}
//         <button onclick="this.parentElement.remove()">X</button>
//     `;

//     document.getElementById("todoList").appendChild(li);
//     input.value = "";
// }
// const todoList = document.getElementById("todoList");
// const resetbtn = document.getElementById("resetBtn");

// function resetTodo() {
//     document.getElementById("todoList").innerHTML = "";
// }

// let todos = [];
// function saveTodos() {
//     localStorage.setItem("todos", JSON.stringify(todos));



// }
// localStorage.setItem("todos", JSON.stringify(todos));
// function getTodos() {
//     const storedTodos = localStorage.getItem("todos");

//     // if (storedTodos) {
//         todos = JSON.parse(storedTodos);
    // }

// }
//  const input = document.getElementById("todoInput");
//  const todoList = document.getElementById("todoList");


// //  let todos = JSON.parse(localStorage.getItem("todos")) || [];
//  function renderTodos() {
//     todos.forEach(todo => {
//         const li = document.createElement("li");
//         const p = document.createElement('p');
//         const resetbtn = document.createElement('button');

//         p.innertext = todo;
//         resetbtn.innerText = 'reset';
//         resetbtn.addEventListener('click', ()=> {
//             li.remove();
//         })
//         li.append(p, resetbtn);
//         todoList.append(li);
//     })

//  }
//  addbtn.addEventListener








// function addTodo() {
//     const task = input.value.trim();

//     if (task === "") {
//         alert("Enter a task");
//         return;
//     }

//     todos.push(task);
//     saveTodos();
//     renderTodos();

//     input.value = "";
// }

// function renderTodos() {
//     todoList.innerHTML = "";

//     todos.forEach((task, index) => {
//         const li = document.createElement("li");
//         li.innerHTML = `
//             ${task}
//             <button onclick="deleteTodo(${index})">X</button>
//         `;
//         todoList.appendChild(li);
//     });
// }

// function deleteTodo(index) {
//     todos.splice(index, 1);
//     saveTodos();
//     renderTodos();
// }

// function resetTodo() {
//     todos = [];
//     saveTodos();
//     renderTodos();
// }

// function saveTodos() {
//     localStorage.setItem("todos", JSON.stringify(todos));
// }

// // function renderTodos
// // const todos = []
// // localStorage.setItem("todos", todos);
// // localStorage.getItem("todos");





// const todoInput = document.getElementById("todoInput");
// const todoList = document.getElementById("todoList");

// // // Add a new todo
// function addTodo() {
//     const task = todoInput.value.trim();

//     if (task === "") {
//         alert("Please enter a task");
//         return;
//     }

//     const li = document.createElement("li");
//     li.textContent = task;

//     // Optional: click to delete single todo
//     li.addEventListener("click", () => {
//         li.remove();
//     });

//     todoList.appendChild(li);
//     todoInput.value = "";
// }

// // Reset all todos
// function resetTodos() {
//     const confirmReset = confirm("Are you sure you want to reset all todos?");
//     if (confirmReset) {
//         todoList.innerHTML = "";
//     }
// }



// updating my code for local storage

const input = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");


// let todos = JSON.parse(localStorage.getItem("todos")) || [];
// renderTodos();

// function addTodo() {
//     const task = input.value.trim();

//     if (task === "") {
//         alert("Enter a task");
//         return;
//     }

//     todos.push(task);
//     saveTodos();
//     renderTodos();

//     input.value = "";
// }

// function renderTodos() {
//     todoList.innerHTML = "";

//     todos.forEach((task, index) => {
//         const li = document.createElement("li");
//         li.innerHTML = `
//             ${task}
//             <button onclick="deleteTodo(${index})">X</button>
//         `;
//         todoList.appendChild(li);
//     });
// }

// function deleteTodo(index) {
//     todos.splice(index, 1);
//     saveTodos();
//     renderTodos();
// }

// function resetTodo() {
//     todos = [];
//     saveTodos();
//     renderTodos();
// }

// function saveTodos() {
//     localStorage.setItem("todos", JSON.stringify(todos));
// }











// const input = document.getElementById("todoInput");
// const todoList = document.getElementById("todoList");

let todos = [];

const storedTodos = localStorage.getItem("todos");

if (storedTodos) {
    todos = JSON.parse(storedTodos);
}

renderTodos();

function addTodo() {
    const task = input.value.trim();

    if (task === "") {
        alert("Enter a task");
        return;
    }

    todos.push(task);
    saveTodos();
    renderTodos();

    input.value = "";
}

function renderTodos() {
    todoList.innerHTML = "";

    todos.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${task}
            <button onclick="deleteTodo(${index})">X</button>
        `;
        todoList.appendChild(li);
    });
}

function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
}

function resetTodo() {
    todos = [];
    saveTodos();
    renderTodos();
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
