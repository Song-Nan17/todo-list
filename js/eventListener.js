// localStorage.clear();

let onloadPageListener = () => {
  processSomeDataInLS('all');
  refreshDisplay();
}

let addTodoListener = () => {
  addNewTodo();
  refreshDisplay();
}

let buttonAllListener = () => {
  processSomeDataInLS('all');
  refreshDisplay('all');
}

let buttonActiveListener = () => {
  processSomeDataInLS('active');
  refreshDisplay('active');

}
let buttonCompleteListener = () => {
  processSomeDataInLS('completed');
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
  deletedTodo(event.target.id)
  refreshDisplay()
}