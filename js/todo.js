const list = document.querySelector('.list');
const button = document.querySelector('.add');
const field = document.querySelector('.field');

function createTask(value){
    const task  = document.createElement('div');
    task.textContent = value;
    task.classList.add('task','unsuccess');

    const checkBox = document.createElement('input');
    checkBox.type = 'checkBox';
    checkBox.classList.add('status');
    checkBox.addEventListener('click', (event)=>completeTask(event));

    const button = document.createElement('input');
    button.value = 'удалить';
    button.type = 'button';

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