let tasks = [
    "Study JavaScript",
    "Do my assignment",
    "Practice coding"
];

function showTasks() {
    console.log("My To-Do List:");

    for (let i = 0; i < tasks.length; i++) {
        console.log((i + 1) + ". " + tasks[i]);
    }
}

showTasks();