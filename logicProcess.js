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