
let generateNewTodo = () => {
  let content = getInputContent();
  if (!content.length) {
    return;
  }
  let status = getStatus();
  if (!status) {
    status = 'active';
  }
  let id = new Date();
  return new Todo(content, status, id);
}

let addTodo = todo => {
  if (!todo) {
    return;
  }
  let todos = getTodos();
  todos = JSON.parse(todos);
  if (!todos) {
    todos = [];
  }
  todos.push(todo);
  todos = JSON.stringify(todos);
  setTodos(todos);
}

let changeButtonCompletedColor = () => {
  document.getElementById('completed').style.background = 'pink';
  document.getElementById('all').style.background = '';
  document.getElementById('active').style.background = '';
}

let changeButtonAllColor = () => {
  document.getElementById('completed').style.background = '';
  document.getElementById('all').style.background = 'pink';
  document.getElementById('active').style.background = '';
}

// let displayCompletedTodos = () =>