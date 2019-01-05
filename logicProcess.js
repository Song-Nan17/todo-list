function toAddTodo() {
  let todo = generateNewTodo();
  if (todo) {
    return addTodo(todo);
  }
  return;
}

function clearInputBox() {
  let input = document.getElementById('inputBox');
  input.value = '';
}

function changeCompletedButtonColor() {
  document.getElementById('completed').style.background = 'pink';
  document.getElementById('all').style.background = '';
  document.getElementById('active').style.background = '';
}

// function toDisplayCompletedTodos() {
// getCompletedTodos()
//   displayCompletedTodos();
// }