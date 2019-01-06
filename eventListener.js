// localStorage.clear();




let initializeDisplay=()=>{
  displayTodosOf('all');

  displayLeftItemsOfTodos('all');

}

let addTodoListener = () => {
  let todo = generateNewTodo();
  addTodo(todo);
  clearInputBox();
  refreshTodosDisplay();
}

let buttonAllListener = () => {
  setButtonStatusTo('all');
  changeButtonAllColor();
  displayTodosOf('all');
  displayLeftItemsOfTodos('all');
}

let buttonActiveListener=()=>{
  setButtonStatusTo('active');
  changeButtonActiveColor();
  displayTodosOf('active');
  displayLeftItemsOfTodos('active')
}
let buttonCompleteListener = () => {
  setButtonStatusTo('completed');
  changeButtonCompletedColor();
  displayTodosOf('completed');
  displayLeftItemsOfTodos('completed');
}
