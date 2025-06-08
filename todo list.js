const todos = [];

function addTask(task) {
  todos.push(task);
  console.log(`Task "${task}" added.`);
}

function showTasks() {
  if (todos.length === 0) {
    console.log("No tasks found.");
  } else {
    console.log("Your Tasks:");
    todos.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
}

function removeTask(index) {
  if (index >= 0 && index < todos.length) {
    const removed = todos.splice(index, 1);
    console.log(`Removed: "${removed[0]}"`);
  } else {
    console.log("Invalid task number.");
  }
}

// Example usage:
addTask("Learn JavaScript");
addTask("Do exercise");
showTasks();
removeTask(0); // removes "Learn JavaScript"
showTasks();
