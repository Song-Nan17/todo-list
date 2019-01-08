
let refreshDisplay = buttonId => {
  let status = getStrFromLocalStorage('buttonStatus');
  toDisplayTodos(status)
  displayLeftItemsOfTodos(status);
  displayClearCompleted();
  clearInputBox();
  if (buttonId) {
    changeButtonsColor(buttonId);
  }
}

let toDisplayTodos = status => {
  let todos = getArrFromLocalStorage('todos');
  if (!todos) {
    return;
  }
  let displayTodos = todos;
  if (status === 'active') {
    displayTodos = getTodosIsClass('active', todos);
  } else if (status === 'completed') {
    let completedTodos = getTodosIsClass('completed', todos);
    displayTodos = noDisplayNewAddTodo(completedTodos);
  }
  displayLiTags(displayTodos);
}

let noDisplayNewAddTodo = completedTodos => {
  let newTodoIds = getArrFromLocalStorage('newTodoIds');
  if (!newTodoIds) {
    return completedTodos;
  }
  return displayTodos = deleteNewAdds(newTodoIds, completedTodos);
}

let displayLiTags = todos => {
  let liTags = getLiTags(todos);
  document.getElementById('todoList').innerHTML = liTags.join('\n');
}

let displayLeftItemsOfTodos = status => {
  let todos = getArrFromLocalStorage('todos');
  if (status !== 'all' && todos) {
    todos = getTodosIsClass(status, todos);
  }
  let leftItems = 0;
  if (todos) {
    leftItems = todos.length;
  }
  document.getElementById('leftItems').innerHTML = `Left items:${leftItems}`
  setLeftItems(leftItems);
}

let displayClearCompleted = () => {
  let todos = getArrFromLocalStorage('todos');
  if (todos) {
    let completedTodos = getTodosIsClass('completed', todos);
    if (completedTodos.length > 1) {
      document.getElementById('clearCompleted').style.visibility = 'visible';
    } else {
      document.getElementById('clearCompleted').style.visibility = 'hidden';
    }
  }

}

let changeButtonsColor = buttonId => {
  let buttons = document.getElementsByTagName('input');
  for (i = 0; i < buttons.length; i++) {
    buttons[i].style.background = '';
  }
  document.getElementById(buttonId).style.background = 'pink';
}

let addNewTodo = () => {
  let todo = generateNewTodo();
  addTodo(todo);
}

let generateNewTodo = () => {
  let content = getInputContent();
  if (!content.length) {
    return;
  }
  let status = 'active';
  let id = new Date();
  if (getStrFromLocalStorage('buttonStatus') === 'completed') {
    status = 'completed';
    refreshNewAddTodoIds(id);
  }
  return new Todo(content, status, id);
}

let refreshNewAddTodoIds = id => {
  let newTodoIds = getArrFromLocalStorage('newTodoIds');
  if (!newTodoIds) {
    newTodoIds = [];
  }
  newTodoIds.push(id);
  setNewAddTodoIds(newTodoIds);
}

let addTodo = todo => {
  if (!todo) {
    return;
  }
  let todos = getArrFromLocalStorage('todos');
  if (!todos) {
    todos = [];
  }
  todos.push(todo);
  setTodos(todos);
}

let clearCompletedTodos = () => {
  let todos = getArrFromLocalStorage('todos');
  todos = deleteCompletedTodos(todos);
  setTodos(todos);
}

let completeClickedTodo = event => {
  if (event.target.tagName.toLowerCase() === 'li') {
    let clickedTodoId = event.target.childNodes[1].id;
    changeClickTodoStatus(clickedTodoId, 'completed');
  }
}

let deletedTodo = cilckedTodoId => {
  let todos = getArrFromLocalStorage('todos');
  let deletedTodos = deleteTodoById(cilckedTodoId, todos);
  setTodos(deletedTodos);
}
