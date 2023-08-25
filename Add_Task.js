let btn = document.querySelector(".add-new");
btn.addEventListener("click", addTask);

function createTaskDiv(textEntry) {

    
    
    const mainBody = document.querySelector(".main-body");
    
    const task = document.createElement('div');
    task.setAttribute("class", "task");
    const taskContainer = document.createElement('div');
    taskContainer.setAttribute("class", "task-container");
    task.appendChild(taskContainer);
    mainBody.appendChild(task);
    

    const textContainer = document.createElement("div");
    textContainer.setAttribute("class", "text-container");
    taskContainer.appendChild(textContainer);
    
    const text = document.createElement("p");
    text.textContent = textEntry;
    text.setAttribute("class", "task-text");
    textContainer.appendChild(text);

    const deleteContainer = document.createElement("div");
    deleteContainer.setAttribute("class", "delete-container");
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute("class", "delete-button");
    deleteButton.textContent = "Delete";
    deleteContainer.appendChild(deleteButton);
    taskContainer.appendChild(deleteContainer);

    deleteButton.addEventListener("click", (event) =>{
        const button = event.target
        const parent = button.parentElement.parentElement.parentElement
        const taskText = parent.childNodes[0].childNodes[0].childNodes[0].textContent
        const tasksInLocalStorage = JSON.parse(localStorage.getItem("tasks"));
        const arrayWithoutElement = tasksInLocalStorage.filter(function (word) {
            return word !== taskText
        });
        
        localStorage.setItem("tasks", JSON.stringify(arrayWithoutElement))

        parent.remove()

        
    });

}


function saveItems(textEntry) {
    let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.push(textEntry);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    let textEntry = document.querySelector(".text-input").value;
    
    createTaskDiv(textEntry);
    saveItems(textEntry);
}


JSON.parse(localStorage.getItem("tasks") || "[]").forEach(createTaskDiv)

