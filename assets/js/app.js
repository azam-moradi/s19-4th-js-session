const listWrapper = document.getElementById("list-wrapper");
const taskInput = document.getElementById("task-input");
const statuses = document.querySelectorAll(".menu li a");

const tasks = [
    {
        title: "Lorem Ipsum is simply dummy 1",
        status: "PENDING",
    },
    {
        title: "Lorem Ipsum is simply dummy 2",
        status: "COMPLETED",
    },
    {
        title: "Lorem Ipsum is simply dummy 3",
        status: "COMPLETED",
    },
    {
        title: "Lorem Ipsum is simply dummy 4",
        status: "COMPLETED",
    },
    {
        title: "Lorem Ipsum is simply dummy 5",
        status: "PENDING",
    },
];

function onClickTask(e) {
    e.target.classList.toggle("completed");
}

for (let i = 0; i < tasks.length; i++) {
    console.log(tasks[i]);
    const title = tasks[i].title;
    const status = tasks[i].status;
    const newTask = document.createElement("li");
    newTask.classList.add("checkbox");
    if (status === "COMPLETED") newTask.classList.add("completed");

    // if (status === "COMPLETED"){
    // newTask.classList.add("completed");
    // }
    newTask.addEventListener("click", onClickTask)
    newTask.innerHTML = title;
    listWrapper.appendChild(newTask);
}

const allTasks = document.querySelectorAll(".checkbox");
const completedTasks = document.querySelectorAll(".checkbox.completed");
const pendingTasks = document.querySelectorAll(".checkbox:not(.completed)");

taskInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && taskInput.value.trim().length > 3) {
        const newTask = document.createElement("li");
        newTask.classList.add("checkbox");
        newTask.innerHTML = taskInput.value.trim();
        newTask.addEventListener("click", onClickTask);
        listWrapper.appendChild(newTask);
    }
})

function onClickAllStatus(e) {
    statuses.forEach(function (item) {
        item.classList.remove("selected-status");
    })
    allTasks.forEach(function (item) {
        item.classList.remove("hide");
    })
    e.classList.add("selected-status");

}

function onClickPending(e) {
    const pendingTasks = document.querySelectorAll(".checkbox:not(.completed)");
    const completedTasks = document.querySelectorAll(".checkbox.completed");

    statuses.forEach(function (item) {
        item.classList.remove("selected-status");
    })
    completedTasks.forEach(function (item) {
        console.log(item);
        item.classList.add("hide");
    })
    pendingTasks.forEach(function (item) {
        item.classList.remove("hide");
    })
    e.classList.add("selected-status");
}

function onClickCompleted(e) {
    const completedTasks = document.querySelectorAll(".checkbox.completed");
    const pendingTasks = document.querySelectorAll(".checkbox:not(.completed)");

    pendingTasks.forEach(function (item) {
        item.classList.add("hide");
    })
    completedTasks.forEach(function (item) {
        item.classList.remove("hide");
    })
    statuses.forEach(function (item) {
        item.classList.remove("selected-status");
    })
    e.classList.add("selected-status");
}

console.log(pendingTasks);
console.log(completedTasks);
console.log(completedTasks.length);