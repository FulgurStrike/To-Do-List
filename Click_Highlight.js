var task = document.querySelector(".task");
task.addEventListener("click", highlight);

function highlight() {
    task.style = "border: solid 1px white;"
}