const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const clearBtn = document.querySelector('.clear-tasks');
const taskList = document.querySelector('.collection');

// Load All event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners(){
    document.addEventListener('DOMContentLoaded', getTasks);
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTasks);
}

function getTasks (){
    if(localStorage.getItem('tasks')=== null){
        tasks = [];
    } else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }


tasks.forEach(function(task){
    const li = document.createElement('li');

    li.className = 'collection-item';

    li.appendChild(document.createTextNode(task));
    
    const link = document.createElement('a');

    link.className = 'delete-item secondary-content';

    link.innerHTML = '<i class="fa fa-remove"></i>';
    
    li.appendChild(link);

    taskList.appendChild(li);
 });
}

function addTask(e){
    if(taskInput.value === ''){
        alert('Add task');
    }
    const li = document.createElement('li');

    li.className = 'collection-item';

    li.appendChild(document.createTextNode(task.value));
    
    const link = document.createElement('a');

    link.className = 'delete-item secondary-content';

    link.innerHTML = '<i class="fa fa-remove"></i>';
    
    li.appendChild(link);

    taskList.appendChild(li);

    storeTaskInLocalStorage(taskInput.value);

    taskInput.value = '';

    e.preventDefault();
}

function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    } else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure ?')); {
            e.target.parentElement.parentElement.remove();

            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks = [];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        };
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasks(){
    if(confirm('Are you sure ?')){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

    clearTasksFromLocalStorage();
}
    function clearTasksFromLocalStorage(){
        localStorage.clear();
    }
}
