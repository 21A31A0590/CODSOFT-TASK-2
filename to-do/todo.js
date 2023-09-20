document.addEventListener("DOMContentLoaded", function () {
    const addTaskButton = document.getElementById("add-button");
    const taskInput = document.getElementById("new-task");
    const taskList = document.getElementById("task-list");

    addTaskButton.addEventListener("click", addTask);

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = "";

            const editButton = li.querySelector(".edit-button");
            editButton.addEventListener("click", () => editTask(li));

            const deleteButton = li.querySelector(".delete-button");
            deleteButton.addEventListener("click", () => deleteTask(li));
        }
    }

    function editTask(li) {
        const span = li.querySelector("span");
        const newText = prompt("Edit task:", span.textContent);

        if (newText !== null) {
            span.textContent = newText;
        }
    }

    function deleteTask(li) {
        taskList.removeChild(li);
    }
});