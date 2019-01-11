let setButtonStatusTo = status => localStorage.setItem('buttonStatus', status);

let getStrFromLocalStorage = stringName => localStorage.getItem(stringName);

let getTodosFromStorage = () => {
  let todos = localStorage.getItem('todos');
  if(!todos) {
    return [];
  }
  return JSON.parse(todos);
}

let setTodos = todos => {
  todos = JSON.stringify(todos);
  localStorage.setItem('todos', todos);
}

let setNewAddTodoIds = newTodoIds => {
  newTodoIds = JSON.stringify(newTodoIds);
  localStorage.setItem('newTodoIds', newTodoIds);
}