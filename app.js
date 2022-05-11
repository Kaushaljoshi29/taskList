//Define UI variables.
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//Load all event listeners
loadEventListeners();

//Define loadEventListeners();
function loadEventListeners() {
  //Add task event
  form.addEventListener("submit", addTask);
  //Remove task event
  taskList.addEventListener("click", removeTask);
  //Clear task event
  clearBtn.addEventListener("click", clearTask);
  //Filter tasks event
  filter.addEventListener("keyup", filterTask);
}

//Add Task
function addTask(e) {
  //Create li element
  const li = document.createElement("li");
  //Add class to li
  li.className = "collection-item";
  //create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  //create new link element
  const link = document.createElement("a");
  //Add class to link element
  link.className = "delete-item secondary-content";
  //Add icon to html
  link.innerHTML = '<i class="fa fa-remove"></li>';
  //Append the link to li
  li.appendChild(link);

  //Add li to the document
  taskList.appendChild(li);

  e.preventDefault();
}

//Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

//Clear Task
function clearTask(e) {
  //Without using loop
  // taskList.innerHTML = '';

  //Using Loop
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

//Filter Task
function filterTask(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll(".collection-item").forEach((task) => {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
