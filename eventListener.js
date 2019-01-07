// localStorage.clear();

let onloadPageListener = () => {
  setButtonStatusTo('all');
  deleteNewTodoIdsInLS();
  refreshDisplay();
}

let addTodoListener = () => {
  addNewTodo();
  refreshDisplay();
}

let buttonAllListener = () => {
  setButtonStatusTo('all');
  deleteNewTodoIdsInLS();
  refreshDisplay('all');
}

let buttonActiveListener = () => {
  setButtonStatusTo('active');
  deleteNewTodoIdsInLS();
  refreshDisplay('active');

}
let buttonCompleteListener = () => {
  setButtonStatusTo('completed');
  deleteNewTodoIdsInLS();
  refreshDisplay('completed');
}

let clearCompletedListener = () => {
  clearCompletedTodos();
  refreshDisplay();
}

let completeTodoListener = event => {
  completeClickedTodo(event);
  refreshDisplay();
}

let deleteTodoListener = event => {
  let cilckedTodoId = event.target.id;
  deletedTodo(cilckedTodoId);
  refreshDisplay()
}