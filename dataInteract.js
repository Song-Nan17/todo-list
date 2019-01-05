function generateNewTodo() {
  let content = document.getElementById('inputBox').value;
  if (content.length) {
    let status = 'active';
    if (buttonCompleteListener() === 1) {
      status = 'completed';
    }
    let id = new Date();
    return new Todo(content, status, id);
  }
  return;
}

function addTodo(todo) {
  let todos = localStorage.getItem('todos');
  todos = JSON.parse(todos);
  if (!todos) {
    todos = [];
  }
  todos.push(todo);
  todos = JSON.stringify(todos)
  localStorage.setItem('todos', todos)
}

// function getCompletedTodos() {
//   let todos = localStorage.getItem('todos');

// }