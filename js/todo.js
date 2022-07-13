const list = document.querySelector('.list');
const button = document.querySelector('.add');
const field = document.querySelector('.field');
const filter = document.querySelector('.filter');

function createTask(value){
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

function addTask(){
    if (field.value !== '' ){
        const zhopa = createTask(field.value);
        list.appendChild(zhopa);
        field.value = '';
    }
}

function completeTask(event){
    const checkBox = event.target;
    const parent = checkBox.parentElement;
    if (checkBox.checked){
        parent.classList.remove('unsuccess');
        parent.classList.add('success');
    } else{
        parent.classList.remove('success');
        parent.classList.add('unsuccess');
    }


}
button.addEventListener('click', addTask);
field.addEventListener('keydown', event=>{
    if (event.keyCode == 13){
        addTask();
    }
})

function deleteTask(event){
    const button = event.target;
    const parent = event.target.parentElement;
     if (confirm('Удалить задачу')) {
        parent.remove();
     }
}

filter.addEventListener('change',(event)=>filterTask(event));

function filterTask(){
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
        