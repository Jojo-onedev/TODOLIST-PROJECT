const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(inputBox.value == ""){
        alert("You must write a task")
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }

    inputBox.value = "";

    saveToLocalStorage()
}

listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName ==='LI'){
        e.target.classList.toggle('checked');
    } else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveToLocalStorage()
    }
},false)


function saveToLocalStorage(){
    //console.log("Registered");
    localStorage.setItem("todoitems", listContainer.innerHTML);
}

function getTodoItemsFromLocalStorage() {
    listContainer.innerHTML = localStorage.getItem("todoitems");
}

getTodoItemsFromLocalStorage()