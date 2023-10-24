document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const taskList = document.getElementById("task-list");
    const addButton = document.getElementById("add");

    addButton.addEventListener("click", function () {
        const taskText = taskInput.value;
        if (taskText.trim() !== "") {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                ${taskText}
                <button class="delete">Delete</button>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = "";

            taskItem.querySelector(".delete").addEventListener("click", function () {
                taskList.removeChild(taskItem);
            });
        }
    });
});
