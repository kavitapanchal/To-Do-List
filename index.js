// document.getElementById('addTodoBtn').addEventListener('click', function() {
//     const todoTitle = document.getElementById('todoTitle').value;
//     const todoDate = document.getElementById('todoDate').value;

//     if (todoTitle === "") {
//         alert("Please enter a task.");
//         return;
//     }

//     const todoList = document.getElementById('todoList');
//     const todoDiv = document.createElement('div');
//     todoDiv.classList.add('todoItem');

//     todoDiv.innerHTML =`
//         <h3>${todoTitle}</h3>
//         <p>${todoDate}</p>
//         <button class="editBtn">Edit Todo</button>
//         <button class="removeBtn">Remove Todo</button>
//         <button class="markDoneBtn">Mark as Done</button>
//     `;

//     todoList.appendChild(todoDiv);

//     // Remove Todo
//     todoDiv.querySelector('.removeBtn').addEventListener('click', function() {
//         todoList.removeChild(todoDiv);
//     });

//     // Edit Todo
//     todoDiv.querySelector('.editBtn').addEventListener('click', function() {
//         const newTitle = prompt("Edit Task:", todoTitle);
//         if (newTitle) {
//             todoDiv.querySelector('h3').textContent = newTitle;
//         }
//     });

//     // Mark as Done
//     todoDiv.querySelector('.markDoneBtn').addEventListener('click', function() {
//         todoDiv.classList.toggle('done');
//     });

//     // Clear input after adding
//     document.getElementById('todoTitle').value = '';
// });

document.getElementById('addTodoBtn').addEventListener('click', function() {
    const todoTitle = document.getElementById('todoTitle').value;
    const todoDate = document.getElementById('todoDate').value;

    if (todoTitle === "") {
        alert("Please enter a task.");
        return;
    }

    const todoList = document.getElementById('todoList');
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todoItem');

    todoDiv.innerHTML = `
        <div class="todoContent">
            <input type="text" class="todoTitle" value="${todoTitle}" readonly>
            <p class="todoDate">${todoDate}</p>
        </div>
        <button class="editBtn">Edit Todo</button>
        <button class="removeBtn">Remove Todo</button>
        <button class="markDoneBtn">Mark as Done</button>
    `;

    todoList.appendChild(todoDiv);

    // Remove Todo
    todoDiv.querySelector('.removeBtn').addEventListener('click', function() {
        todoList.removeChild(todoDiv);
    });

    // Edit Todo
    todoDiv.querySelector('.editBtn').addEventListener('click', function() {
        const todoTitleInput = todoDiv.querySelector('.todoTitle');
        if (todoTitleInput.hasAttribute('readonly')) {
            todoTitleInput.removeAttribute('readonly');
            todoTitleInput.focus();
            this.textContent = 'Save Todo';
        } else {
            todoTitleInput.setAttribute('readonly', true);
            this.textContent = 'Edit Todo';
        }
    });

    // Mark as Done
    todoDiv.querySelector('.markDoneBtn').addEventListener('click', function() {
        todoDiv.classList.toggle('done');
    });

    // Clear input after adding
    document.getElementById('todoTitle').value = '';
});
