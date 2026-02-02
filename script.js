// // const todoList = [];
// // function addTodo(item) {
// //     todoList.push(item);
// //     console.log(`Added: ${item}`);
// // }

// // todo.js


function addTodo() {
    let input = document.getElementById("todoInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        ${task}
        <button onclick="this.parentElement.remove()">X</button>
    `;

    document.getElementById("todoList").appendChild(li);
    input.value = "";
}
const todoList = document.getElementById("todoList");
const resetbtn = document.getElementById("resetBtn");

function resetTodo() {
    document.getElementById("todoList").innerHTML = "";
}






// const todoInput = document.getElementById("todoInput");
// const todoList = document.getElementById("todoList");

// // Add a new todo
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