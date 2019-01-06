// localStorage.clear();

let initializeDisplay = () => {
  displayTodosOf('all');
  displayLeftItemsOfTodos('all');
  displayClearCompleted();
  setButtonStatusTo('all');
}

let addTodoListener = () => {
  let todo = generateNewTodo();
  addTodo(todo);
  clearInputBox();
  refreshTodosDisplay();
  displayClearCompleted();
}

let buttonAllListener = () => {
  setButtonStatusTo('all');
  changeButtonAllColor();
  displayTodosOf('all');
  displayLeftItemsOfTodos('all');
}

let buttonActiveListener = () => {
  setButtonStatusTo('active');
  changeButtonActiveColor();
  displayTodosOf('active');
  displayLeftItemsOfTodos('active')
}
let buttonCompleteListener = () => {
  setButtonStatusTo('completed');
  changeButtonCompletedColor();
  deleteNewTodosId();
  displayTodosOf('completed');
  displayLeftItemsOfTodos('completed');
}

let clearCompletedListener = () => {
  clearCompletedTodos();
  displayClearCompleted();
}

let completeTodoListener = event => {
  completeClickedTodo(event);
  refreshTodosDisplay();
  displayClearCompleted();

}

let deleteTodoListener = event => {
  let idOfDeletedTodo = event.target.id;
  deletedTodo(idOfDeletedTodo);
  refreshTodosDisplay();
}