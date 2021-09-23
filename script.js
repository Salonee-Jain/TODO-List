let toDoInput = document.querySelector(".todo-input");
let toDoButton = document.querySelector(".todo-button");
let toDoList = document.querySelector(".todo-list");
let todoBox = document.querySelector(".todo")



toDoButton.addEventListener('click', addTodo)
toDoList.addEventListener('click', deleteTodo)








function addTodo(event){
    event.preventDefault();/*avoides browser to refresh
        for example console.log(hello) at event listner 
        when i clicked button the hello printed the page
         refreshed again to avoid that
         --THAT IS IT AVOIDES FORM FROM SUBMITTING---
    */




if(toDoInput.value!=""){
    const todo = document.createElement("div");
    todo.classList.add("todo");
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    todoItem.innerText = toDoInput.value; 
    todo.appendChild(todoItem);



    const check = document.createElement("button");
    check.classList.add("check");
    check.innerHTML = '<i class= "fa fa-check"></i>';
    todo.appendChild(check);
    const deleted = document.createElement("button");
    deleted.classList.add("trash");
    deleted.innerHTML = '<i class= "fa fa-trash"></i>';
    todo.appendChild(deleted);

    toDoList.appendChild(todo);
    toDoInput.value="";
} 

    
}

function deleteTodo(e){
    e.preventDefault();
    const item = e.target;
    if(item.classList[0]==="trash"){
        item.parentNode.remove();
    }
}