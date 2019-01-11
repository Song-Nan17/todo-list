let setButtonStatusTo = status => localStorage.setItem('buttonStatus', status);

let deleteNewTodoIdsInLS = () => localStorage.removeItem('newTodoIds');

let getStrFromLocalStorage = stringName => localStorage.getItem(stringName);

let getArrFromLocalStorage = arrName => {
  let arr = localStorage.getItem(arrName);
  return JSON.parse(arr);
}

let setTodos = todos => {
  todos = JSON.stringify(todos);
  localStorage.setItem('todos', todos);
}

let setNewAddTodoIds = newTodoIds => {
  newTodoIds = JSON.stringify(newTodoIds);
  localStorage.setItem('newTodoIds', newTodoIds);
}