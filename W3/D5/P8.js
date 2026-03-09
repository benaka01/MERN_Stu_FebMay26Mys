//Event Deligation

const tasklist = document.getElementById("tasklist");
const addtask = document.getElementById("addtask");

tasklist.addEventListener("click", function (event) {
    if (event.target.classList.contains("deletebtn")) {
        console.log("Delete Button clicked for : ", event.target.parentElement.textContent.trim());
        event.target.parentElement.remove();
    }
});

addtask.addEventListener("click", function(){
    let taskCount=3;
    taskCount++;
    const li = document.createElement("li");
    li.innerHTML = "Task " + taskCount + '<button class="deletebtn">Delete</button>';
    tasklist.appendChild(li);
    console.log("New task Created");
});