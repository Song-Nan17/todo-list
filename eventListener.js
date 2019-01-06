// localStorage.clear();

let addTodoListener = () => {
  let todo = generateNewTodo();
  addTodo(todo);
  clearInputBox();
  refreshTodos();
}

let buttonAllListener = () => {
  setButtonStatusTo('all');
  changeButtonAllColor();
  displayAllTodos();
  displayLeftItemsOfTodos('all');
}

let buttonActiveListener=()=>{
  setButtonStatusTo('active');
  changeButtonActiveColor();
  displayActiveTodos();
  displayLeftItemsOfTodos('active')
}
let buttonCompleteListener = () => {
  setButtonStatusTo('completed');
  changeButtonCompletedColor();
  displayCompletedTodos();
  displayLeftItemsOfTodos('completed');
}
