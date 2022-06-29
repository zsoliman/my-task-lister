document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener('submit', function (event) {
    event.preventDefault();
    const taskList = document.getElementById('tasks')
    const taskInput = document.getElementById('new-task-description').value
    const task = document.createElement('li')
    const dropDown = document.getElementById('priority')
    let priority = dropDown.options[dropDown.selectedIndex].value;

    task.append(`${dropDown.options[dropDown.selectedIndex].value} priority: ${taskInput}`)

    if (priority == "high") {
      task.style.color = "red"
      task.classList.add('high-priority')
    } else if (priority == "medium") {
      task.style.color = "#ffcc00"
      task.classList.add('medium-priority')
    } else {
      task.style.color = "green"
      task.classList.add('low-priority')
    }

    taskList.append(task)

    const count = taskList.childElementCount
    const nodes = taskList.childNodes


    for (let i = 0; i < count; i++) {
      if (nodes[i + 1].classList.value == "high-priority")
        taskList.insertBefore(nodes[i + 1], nodes[1])
      else if (nodes[i + 1].classList.value == "low-priority")
        taskList.insertAdjacentElement("beforeEnd", nodes[i + 1])
    }

    document.getElementById('new-task-description').value = ""

    let btn = document.createElement('button');
    btn.innerHTML = 'x';
    task.append(btn);

    btn.onclick = function () {
      task.remove(taskInput)
    }



  })
});


