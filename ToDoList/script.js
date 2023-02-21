let taskName = document.forms[0]['task-nam'];
let taskAdd = document.forms[0]['add'];
let tasksDiv = document.querySelector('.container .tasks');
let heading = document.querySelector('.container .fill')
let tasks = getTasksFromLocal();
let deletes;
let updates;
let dones;
let updatedFeild = 0;
// on load
document.body.onload = function (){
    addToLayout(tasks);
}

// on submit form
document.forms[0].onsubmit = function(e){
    if(taskName !== ''){
        if(taskAdd.value == 'update'){
            updateTaskToArray(taskName.value , updatedFeild);
            taskAdd.value='Add Task';
            taskAdd.style.backgroundColor = '#f44336';
            taskName.value = '';
            addToLayout(tasks);
            document.documentElement.style.setProperty('--main-color','#f44336');
        }
        else{
            addTaskToArray(taskName);
        }
    }
    e.preventDefault();
}

// addTaskToArray
function addTaskToArray(taskName){
    tasks.push({
        name : taskName.value,
        complete : false
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
    addToLayout(tasks);
    taskName.value = '';
}

// get Takse from localstorage
function getTasksFromLocal(){
    if(localStorage.getItem('tasks')){
        return Array.from(JSON.parse(localStorage.getItem('tasks')));
    }
    else{
        return [];
    }
}

// create tasks in tasks divs
function addToLayout(tasks){
    tasksDiv.innerHTML = '';
    tasks.forEach((elemnt,index) => {
        let divTask = document.createElement('div');
        let taskText = document.createTextNode(elemnt.name);
        divTask.appendChild(taskText);
        let divTools = document.createElement('div');
        let icon1 = document.createElement('i');
        let icon2 = document.createElement('i');
        let icon3 = document.createElement('i');
        icon1.classList.add('fa-solid');
        icon1.classList.add('fa-pen-to-square');
        icon1.classList.add('update');
        icon2.classList.add('fa-solid');
        icon2.classList.add('fa-trash');
        icon2.classList.add('delete');
        icon3.classList.add('fa-solid');
        icon3.classList.add('fa-check');
        icon3.classList.add('don');
        if(elemnt.complete){
            divTask.classList.add('done');
        }
        divTools.appendChild(icon3);
        divTools.appendChild(icon1);
        divTools.appendChild(icon2);
        divTask.appendChild(divTools);
        icon3.dataset.number = index+1;
        icon2.dataset.number = index+1;
        icon1.dataset.number = index+1;
        tasksDiv.appendChild(divTask);
    });
    deletes = document.querySelectorAll('.container .tasks div div i:nth-child(3)');
    updates = document.querySelectorAll('.container .tasks div div i:nth-child(2)');
    dones = document.querySelectorAll('.container .tasks div div i:nth-child(1)');
    deletes.forEach(elemnt =>{
        elemnt.addEventListener("click",function(){
            let number = (elemnt.dataset.number) - 1;
            elemnt.parentElement.parentElement.remove(); 
            tasks=tasks.filter((element , index)=>{
                return index != number;
            });
            localStorage.setItem('tasks',JSON.stringify(tasks));
            addToLayout(tasks);
        });
    });
    updates.forEach(elemnt =>{
        elemnt.addEventListener("click",function(e){
            let number = (elemnt.dataset.number) - 1;
            let father = elemnt.parentElement.parentElement;    
            taskName.value = father.innerText;
            taskAdd.value = 'update';
            taskAdd.style.backgroundColor = '#00bcd4';
            document.documentElement.style.setProperty('--main-color','#00bcd4');
            updatedFeild = number;
        });
    });
    dones.forEach(elemnt =>{
        elemnt.addEventListener("click",function(){
            let number = (elemnt.dataset.number) - 1;    
            let father = elemnt.parentElement.parentElement;    
            father.classList.add('done');
            // console.log(tasks);
            // console.log(number);
            // console.log(tasks[number]);
            tasks[number].complete = true;
            localStorage.setItem('tasks',JSON.stringify(tasks));
            addToLayout(tasks);
        });
    });
}

// update on taks in tasks divs
function updateTaskToArray(taskName , number){
    tasks[number]['name'] = taskName;
    localStorage.setItem('tasks',JSON.stringify(tasks));
    let updatedText = document.querySelector(`.container .tasks div:nth-child(${number+1})`);
    updatedText.innerHTML = `${taskName}
                    <div>
                        <i class="fa-solid fa-check"></i>
                        <i class="fa-solid fa-pen-to-square update"></i>
                        <i class="fa-solid fa-trash delete"></i>
                    </div>`;
}
