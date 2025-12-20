function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    const list = document.getElementById("taskList");

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <span onclick="removeTask(this)">✖</span>
    `;

    list.appendChild(li);
    input.value = "";
}

function removeTask(element) {
    element.parentElement.remove();
}

