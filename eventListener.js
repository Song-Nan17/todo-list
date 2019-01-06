// localStorage.clear();

let addTodoListener = () => {
  let todo = generateNewTodo();
  addTodo(todo);
  clearInputBox();
  refreshTodos();
}

let buttonAllListener = () => {
  setButtonStatusToAll();
  changeButtonAllColor();
  displayAllTodos();
}

let buttonActiveListener=()=>{
  displayActiveTodos()
}
let buttonCompleteListener = () => {
  setButtonStatusToCompleted();
  changeButtonCompletedColor();
  displayCompletedTodos()
  return 1;
}
