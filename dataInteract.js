let getInputContent = () => document.getElementById('inputBox').value;
let getTodos = () => {
  let todos = localStorage.getItem('todos');
  return JSON.parse(todos);
}
let setTodos = todos => {
  todos = JSON.stringify(todos);
  localStorage.setItem('todos', todos);
}
let clearInputBox = () => {
  let input = document.getElementById('inputBox');
  input.value = '';
}

let getButtonStatus = () => localStorage.getItem('buttonStatus');
let setButtonStatusTo = status => localStorage.setItem('buttonStatus', status);
let getNewAddTodosId = () => {
  let newTodosId = localStorage.getItem('newTodosId');
  return JSON.parse(newTodosId);
}
let setNewAddTodosId = newTodosId => {
  newTodosId = JSON.stringify(newTodosId);
  localStorage.setItem('newTodosId', newTodosId);
}
let deleteNewTodosId = () => localStorage.removeItem('newTodosId')

let deleteNewAdds = (newTodosId, completedTodos) =>
  completedTodos.filter(todo => !newTodosId.includes(todo.id));


let getTodosIsClass = (status, todos) => {
  return todos.filter(todo => todo.status === status);
}


let getLiTags = todos => todos.map(todo =>
  `<li class ="${todo.status}">${todo.content}<span id="${todo.id}" onclick="deleteTodoListener(event)">x</span></li>`);

let setLeftItems = leftItems => localStorage.setItem('leftItems', leftItems);

let deleteCompletedTodos = todos => todos.filter(todo => todo.status !== 'completed');

let deleteTodoById = (deletedTodoId, todos) => todos.filter(todo => todo.id !== deletedTodoId);

let changeClickTodoStatus = (clickedTodoId, status) => {
  let todos = getTodos();
  todos.map(todo => {
    if (todo.id === clickedTodoId) {
      todo.status = status;
    }
    return todo;
  });
  setTodos(todos);
}
