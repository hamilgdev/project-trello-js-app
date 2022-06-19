API_URL =
  'https://my-json-server.typicode.com/miltoncodeyt/project-trello-js-app';

const ApiClient = axios.create({
  baseURL: API_URL
});

ApiClient.get(`${API_URL}/tasks`)
  .then((res) => showAllTasks(res.data))
  .catch((err) => console.error(err));

const showAllTasks = (data) => {
  data.map((task) => createTask(task));
};

const createTask = (task) => {
  let newTask = document.createElement('article');
  newTask.classList.add('card-task');

  let taskTitle = document.createElement('h3');
  taskTitle.classList.add('card-task__title');
  taskTitle.innerText = task.title;

  let taskResponsible = document.createElement('p');
  taskResponsible.classList.add('card_task__responsible');
  taskResponsible.innerHTML = `<span class="card_task__responsible--tag-creator">Responsable:</span> ${task.person}`;

  let taskDate = document.createElement('p');
  taskDate.classList.add('card-task__date');
  taskDate.innerHTML = `<span class="card-task__date--tag-date">Plazo:</span> ${dateFormat(
    task.deadline
  )}`;

  newTask.appendChild(taskTitle);
  newTask.appendChild(taskResponsible);
  newTask.appendChild(taskDate);

  let columnToDo = document.querySelector('#todoTasks');
  let columnInProgress = document.querySelector('#progressTasks');
  let columnDone = document.querySelector('#doneTasks');

  if (task.state === 'to-do') {
    columnToDo.appendChild(newTask);
  }
  if (task.state === 'in-progress') {
    columnInProgress.appendChild(newTask);
  }
  if (task.state === 'done') {
    columnDone.appendChild(newTask);
  }
};
