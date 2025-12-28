var x = 0
function makeTaskF() {
    x++
    // input of task details
    let task_name = document.getElementById("new-task-name")
    let task_description = document.getElementById("new-task-description")
    let task_dnt = document.getElementById("new-task-dnt")

    // task list obj???
    let task_list = document.getElementById("task-list")
    // let task_list_div = document.getElementById("task-list-div")

    
    //task div
    let taskDiv = document.createElement("div")
    taskDiv.setAttribute("id", "task-" + x)
    // task box
    let taskStatus = document.createElement("input")
    taskStatus.setAttribute("id", "task-status-" + x)
    taskStatus.setAttribute("type", "checkbox")
    taskStatus.setAttribute("onclick", "updateTaskStatus(" + x  + ")")
    taskDiv.appendChild(taskStatus)
    //task name
    let  taskName = document.createElement("div")
    taskName.setAttribute("id", "task-name")
    taskName.innerText= task_name.value
    taskDiv.appendChild(taskName)
    //task description
    let taskDescription = document.createElement("div")
    taskDescription.setAttribute("id", "task-description")
    taskDescription.innerText = task_description.value
    taskDiv.appendChild(taskDescription)
    //task delete button
    let taskDelete = document.createElement("button")
    taskDelete.setAttribute("id", "delete-task-" + x)
    taskDelete.setAttribute("onclick", "deleteTask(" + x + ")")
    taskDelete.innerText = "x"
    taskDiv.appendChild(taskDelete)

    // creating the list element
    let task_list_elem = document.createElement("li")
    // appending task div to list element
    task_list_elem.appendChild(taskDiv)
    // appending list element to ul
    task_list.appendChild(task_list_elem)

    // task_list_div.appendChild(task_list)

    task_name.value = ""
    task_description.value = ""

}

function deleteTask(num) {
    console.log("task-"+num)
    document.getElementById("task-"+num).parentElement.remove()
}

function updateTaskStatus(num) {
    let taskToUpdate = document.getElementById("task-" + num)
    let name = taskToUpdate.querySelector("#task-name")
    let description = taskToUpdate.querySelector("#task-description")

    if(!document.getElementById("task-status-" + num).checked) {
        console.log("intersting")
        name.removeAttribute("style")
        description.removeAttribute("style")

    } else {
        console.log("task-"+num)
        name.setAttribute("style", "text-decoration: line-through;")
        description.setAttribute("style", "text-decoration: line-through;")
 
    }
   // console.log(name)
}


// function test() {
//     var x = document.getElementById("new-task-field")
//     var y = document.createElement("h1")
//     // y.textContent("hi")
//     y.textContent = "hiii"
//     x.appendChild(y)
// }