// localStorage.clear();

let addTodoListener = () => {
  let todo = generateNewTodo();
  addTodo(todo);
  clearInputBox();
}

let buttonCompleteListener = () => {
  setStatus();
  changeButtonCompletedColor();
  displayCompletedTodos()
  return 1;
}

let buttonAllListener = () => {
  deleteStatus();
  changeButtonAllColor();
}
