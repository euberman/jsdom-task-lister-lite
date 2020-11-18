
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  //form and relevant input fields
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");

  //ul where new tasks will live on the DOM
  const taskUl = document.getElementById("tasks");

  const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());
  //attach event listeners
  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    taskList.createNewTask(newTaskDescription.value);
    // reset form
    e.target.reset();
    renderApp();
  });
  taskUl.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
      taskList.deleteTask(e.target.dataset.description);
      renderApp();
    }
  });
});


class Task { 
  constructor(description){
    this.description = description;
  }
  render(){
    return `
      <li>
        ${this.description}
      </li>
    `;
  }
};

class TaskList {
  constructor(){
    this.tasks = [];
  }
  createNewTask(description){
    let newTask = new Task(description);
    this.tasks.push(newTask);
  }
  renderTasks(){
    return this.tasks.map((task) => task.render()).join("");
  }
  deleteTask(description){
    this.tasks = this.tasks.filter((task) => task.description !== description);
  }
};

// ========================================================================
// Marc's Version
/*
document.addEventListener('DOMContentLoad',() => {
  const newTaskForm = document.getElementById('create-task-form')
  document.addEventListener('submit', handleNewTaskSubmit);
});

function handleNewTaskSubmit(event){
  event.preventDefault();
  const newTaskText = event.target.newTask.value;
  const taskList = document.getElementById('tasks');

  const newTaskElement = document.createElement('li');
  newTaskElement.innerText = newTaskInput.value;

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'x';
  newTaskElement.append(newTaskElement);

  const newTaskElement = document.createElement('li');
  newTaskElement.innerText = newTaskText;
  taskList.append(newTaskElement);
}
*/
