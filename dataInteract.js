let setButtonStatusTo = status => localStorage.setItem('buttonStatus', status);

let deleteNewTodoIdsInLS = () => localStorage.removeItem('newTodoIds');

let getInputContent = () => document.getElementById('inputBox').value;

let getStrFromLocalStorage = stringName => localStorage.getItem(stringName);

let getArrFromLocalStorage = arrName => {
  let arr = localStorage.getItem(arrName);
  return JSON.parse(arr);
}

let setTodos = todos => {
  todos = JSON.stringify(todos);
  localStorage.setItem('todos', todos);
}

let clearInputBox = () => {
  let input = document.getElementById('inputBox');
  input.value = '';
}

let setNewAddTodoIds = newTodoIds => {
  newTodoIds = JSON.stringify(newTodoIds);
  localStorage.setItem('newTodoIds', newTodoIds);
}

let deleteNewAdds = (newTodoIds, completedTodos) =>
  completedTodos.filter(todo => !newTodoIds.includes(todo.id));

let getTodosIsClass = (status, todos) => {
  return todos.filter(todo => todo.status === status);
}

let getLiTags = todos => todos.map(todo =>
  `<li class ="${todo.status}">${todo.content}<span id="${todo.id}" onclick="deleteTodoListener(event)">x</span></li>`);

let setLeftItems = leftItems => localStorage.setItem('leftItems', leftItems);

let deleteCompletedTodos = todos => todos.filter(todo => todo.status !== 'completed');

let deleteTodoById = (deletedTodoId, todos) => todos.filter(todo => todo.id !== deletedTodoId);

let changeClickTodoStatus = (clickedTodoId, status) => {
  let todos = getArrFromLocalStorage('todos');
  todos.map(todo => {
    if (todo.id === clickedTodoId) {
      todo.status = status;
    }
    return todo;
  });
  setTodos(todos);
}
