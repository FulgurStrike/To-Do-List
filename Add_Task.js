var btn = document.querySelector(".add-new");
btn.addEventListener("click", addTask);


function createTaskDiv(textEntry) {
    
    mainBody = document.querySelector(".main-body");
    
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
        taskText = parent.childNodes[0].childNodes[0].childNodes[0].textContent
        tasksInLocalStorage = JSON.parse(localStorage.getItem("tasks"));
        arrayWithoutElement = tasksInLocalStorage.filter(function (word) {
            return word !== taskText
        });
        
        localStorage.setItem("tasks", JSON.stringify(arrayWithoutElement))

        parent.remove()

        
    });

    

}


function saveItems(textEntry) {
    var tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.push(textEntry);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    textEntry = document.querySelector(".text-input").value;
    
    createTaskDiv(textEntry);
    saveItems(textEntry);
}


JSON.parse(localStorage.getItem("tasks") || "[]").forEach(createTaskDiv)

