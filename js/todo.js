const list = document.querySelector('.list');
const button = document.querySelector('.add');
const field = document.querySelector('.field');
const filter = document.querySelector('.filter');

document.addEventListener('DOMContentLoaded', loadTask);

const createTask=(value)=>{
    const task  = document.createElement('div');
    task.textContent = value;
    task.classList.add('task','unsuccess');

    const checkBox = document.createElement('input');
    checkBox.type = 'checkBox';
    checkBox.classList.add('status');
    checkBox.addEventListener('click', (event)=>completeTask(event));

    const button = document.createElement('input');
    button.value = 'Х';
    button.type = 'button';
    button.classList.add('add-delete');
    button.addEventListener('click', (event)=>deleteTask(event));

     task.appendChild(checkBox);
     task.appendChild(button);
    
    return task;
};

const addTask = ()=>{
    if (field.value !== '' ){
        const zhopa = createTask(field.value);
        list.appendChild(zhopa);
        field.value = '';
        saveTasks();
    }
}

const completeTask = (event)=>{
    const checkBox = event.target;
    const parent = checkBox.parentElement;
    if (checkBox.checked){
        parent.classList.remove('unsuccess');
        parent.classList.add('success');
        saveTasks();
    } else{
        parent.classList.remove('success');
        parent.classList.add('unsuccess');
        saveTasks();
    }


}
button.addEventListener('click', addTask);
field.addEventListener('keydown', event=>{
    if (event.keyCode == 13){
        addTask();
        saveTasks();
    }
})

const deleteTask =(event)=>{
    const button = event.target;
    const parent = event.target.parentElement;
     if (confirm('Удалить задачу')) {
        parent.remove();
        saveTasks();
     }
}

filter.addEventListener('change',(event)=>filterTask(event));

const filterTask=()=>{
    const tasks = document.querySelectorAll(".task");
    tasks.forEach((task)=> {
        
        if (task.classList.contains(filter.value)){
            task.classList.add('filter-status1');
            task.classList.remove('filter-status2');
        } else{
            task.classList.remove('filter-status1');
            task.classList.add('filter-status2');
            }
    });
};
        
function saveTasks() {
    const [...tasks] = document.querySelectorAll('.task');
    const boxOfShit = tasks.map((task,index)=>({
        Id:index,
        content:task.textContent,
        isCompleted:task.querySelector('.status').checked}
));

        const ebalo = JSON.stringify(boxOfShit);
        localStorage.setItem('task',ebalo);
    }
   
function loadTask(){
    const tasks = localStorage.getItem('task');
    const loadedTasks =JSON.parse(tasks);
    loadedTasks.forEach(task => {
        const newTask = createTask(task.content);
        if (task.isCompleted){
            newTask.classList.remove('unsuccess');
            newTask.classList.add('success');
            newTask.querySelector('.status').checked = true;
        };
        newTask.classList.add('task');
        list.appendChild(newTask);
    })}
    