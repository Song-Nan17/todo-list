
let generateNewTodo = () => {
  let content = getInputContent();
  if (!content.length) {
    return;
  }
  let status = 'active';
  if (getButtonStatus() === 'completed') {
    status = 'completed';
  }
  let id = new Date();
  return new Todo(content, status, id);
}

let addTodo = todo => {
  if (!todo) {
    return;
  }
  let todos = getTodos();
  if (!todos) {
    todos = [];
  }
  todos.push(todo);
  setTodos(todos);
}
let refreshTodos = () => {
  let ButtonStatus = getButtonStatus();
  switch(ButtonStatus) {
    case 'all':
    displayAllTodos();
    break;
    case 'actice':
    displayActiveTodos();
    break;
    case 'completed':
    displayCompletedTodos();
    break;
    default:
    displayAllTodos();
  }
}

let changeButtonAllColor = () => {
  document.getElementById('completed').style.background = '';
  document.getElementById('all').style.background = 'pink';
  document.getElementById('active').style.background = '';
}

let displayAllTodos=()=>{
  return;
}

let displayActiveTodos=()=>{
  return;
}

let changeButtonCompletedColor = () => {
  document.getElementById('completed').style.background = 'pink';
  document.getElementById('all').style.background = '';
  document.getElementById('active').style.background = '';
}


let displayCompletedTodos = () => {
  let todos = getTodos();
  let completedTodos = getCompletedTodos(todos);
  let liTags = getLiTags(completedTodos);
  document.getElementById('todoList').innerHTML = liTags.join('\n');
}
