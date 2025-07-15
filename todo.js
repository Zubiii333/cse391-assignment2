// DOM elements
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Array to store tasks
let tasks = [];

// Function to save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from localStorage
function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        renderTasks();
    }
}

// Function to create a new task
function createTask(taskText, completed = false) {
    return {
        id: Date.now(), // Use timestamp as unique ID
        text: taskText,
        completed: completed
    };
}

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        // Create new task object
        const newTask = createTask(taskText);
        
        // Add to tasks array
        tasks.push(newTask);
        
        // Save to localStorage
        saveTasks();
        
        // Render tasks
        renderTasks();
        
        // Clear input field
        taskInput.value = '';
        
        console.log('Task added:', newTask);
    }
}

// Function to delete a task
function deleteTask(taskId) {
    // Filter out the task with the given ID
    tasks = tasks.filter(task => task.id !== taskId);
    
    // Save to localStorage
    saveTasks();
    
    // Render tasks
    renderTasks();
    
    console.log('Task deleted:', taskId);
}

// Function to toggle task completion status
function toggleTaskCompletion(taskId) {
    // Find the task and toggle its completed status
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    
    // Save to localStorage
    saveTasks();
    
    // Render tasks
    renderTasks();
    
    console.log('Task completion toggled:', taskId);
}

// Function to render all tasks
function renderTasks() {
    // Clear the task list
    taskList.innerHTML = '';
    
    // Check if there are no tasks
    if (tasks.length === 0) {
        taskList.innerHTML = '<p class="no-tasks">No tasks yet. Add a task to get started!</p>';
        return;
    }
    
    // Render each task
    tasks.forEach(task => {
        // Create task item container
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.dataset.id = task.id;
        
        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('task-checkbox');
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => toggleTaskCompletion(task.id));
        
        // Create task text
        const taskText = document.createElement('span');
        taskText.classList.add('task-text');
        if (task.completed) {
            taskText.classList.add('completed');
        }
        taskText.textContent = task.text;
        
        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteTask(task.id));
        
        // Append elements to task item
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteBtn);
        
        // Append task item to task list
        taskList.appendChild(taskItem);
    });
}

// Event listener for add button
addBtn.addEventListener('click', addTask);

// Event listener for Enter key in input field
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Load tasks when the page loads
document.addEventListener('DOMContentLoaded', loadTasks);

// Log that the to-do list is ready
console.log('To-Do List initialized and ready to use');