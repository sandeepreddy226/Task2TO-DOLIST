// Get DOM elements
const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add task to the list
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    
    const span = document.createElement('span');
    span.textContent = taskText;

    // Allow clicking to toggle completion
    span.addEventListener('click', () => toggleCompletion(span));

    // Edit button
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.innerHTML = '✎';
    editBtn.onclick = () => editTask(span);

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = '✖';
    deleteBtn.onclick = () => deleteTask(li);

    // Append elements to the list item
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    // Add the list item to the task list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = '';
}

// Edit task
function editTask(span) {
    const newText = prompt('Edit your task:', span.textContent);
    if (newText && newText.trim() !== '') {
        span.textContent = newText.trim();
    }
}

// Delete task
function deleteTask(li) {
    li.remove();
}

// Toggle completion of a task
function toggleCompletion(span) {
    span.classList.toggle('completed');
}

// Event listener for adding task
addTaskBtn.addEventListener('click', addTask);

// Allow pressing "Enter" to add a task
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
