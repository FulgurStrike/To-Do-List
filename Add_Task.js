var btn = document.querySelector(".add-new");
btn.addEventListener("click", addNewTask);

function addNewTask() {
    
    mainBody = document.querySelector(".main-body");
    textEntry = document.querySelector(".text-input").value;

    task = document.createElement('div');
    task.setAttribute("class", "task");
    taskContainer = document.createElement('div');
    taskContainer.setAttribute("class", "task-container");
    task.appendChild(taskContainer);
    mainBody.appendChild(task);
    

    textContainer = document.createElement("div");
    textContainer.setAttribute("class", "text-container");
    taskContainer.appendChild(textContainer);
    
    text = document.createElement("p");
    text.textContent = textEntry;
    text.setAttribute("class", "task-text");
    textContainer.appendChild(text);

    deleteContainer = document.createElement("div");
    deleteContainer.setAttribute("class", "delete-container");
    deleteButton = document.createElement('button');
    deleteButton.setAttribute("class", "delete-button");
    deleteButton.textContent = "Delete";
    deleteContainer.appendChild(deleteButton);
    taskContainer.appendChild(deleteContainer);

    deleteButton.addEventListener("click", (event) =>{
        deleteButton = event.target
        parent = deleteButton.parentElement.parentElement.parentElement
        parent.remove()
        
    });

};




