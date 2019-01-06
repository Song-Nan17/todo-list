

let generateNewTodo = () => {
  let content = getInputContent();
  if (!content.length) {
    return;
  }
  let status = 'active';
  let id = new Date();
  if (getButtonStatus() === 'completed') {
    status = 'completed';
    refreshNewAddTodosId(id);
  }
  return new Todo(content, status, id);
}

let refreshNewAddTodosId = id => {
  let newTodosId = getNewAddTodosId();
  if (!newTodosId) {
    newTodosId = [];
  }
  newTodosId.push(id);
  setNewAddTodosId(newTodosId);
}

let addTodo = todo => {
  if (!todo) {
    return;
  }
  let todos = getTodos();
  if (!todos) {
    todos = [];
  }
  todos.push(todo);
  setTodos(todos);
}
let refreshTodosDisplay = () => {
  let buttonStatus = getButtonStatus();
  switch (buttonStatus) {
    case 'all':
      displayTodosOf('all');
      displayLeftItemsOfTodos('all');
      break;
    case 'active':
      displayTodosOf('active');
      displayLeftItemsOfTodos('active');
      break;
    case 'completed':
      noDisplayNewAddTodo();
      displayLeftItemsOfTodos('completed');
      break;
  }
}

let changeButtonAllColor = () => {
  document.getElementById('completed').style.background = '';
  document.getElementById('all').style.background = 'pink';
  document.getElementById('active').style.background = '';
}

let displayTodosOf = status => {
  let todos = getTodos();
  let displayTodos = todos;
  if (status !== 'all' && todos) {
    displayTodos = getTodosIsClass(status, todos);
  }
  if (displayTodos) {
    displayLiTags(displayTodos);
  }
}

let changeButtonActiveColor = () => {
  document.getElementById('completed').style.background = '';
  document.getElementById('all').style.background = '';
  document.getElementById('active').style.background = 'pink';
}


let changeButtonCompletedColor = () => {
  document.getElementById('completed').style.background = 'pink';
  document.getElementById('all').style.background = '';
  document.getElementById('active').style.background = '';
}


let displayLiTags = todos => {
  let liTags = getLiTags(todos);
  document.getElementById('todoList').innerHTML = liTags.join('\n');
}

let displayLeftItemsOfTodos = status => {
  let todos = getTodos();
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

let noDisplayNewAddTodo = () => {
  let todos = getTodos();
  if (!todos) {
    document.getElementById('todoList').innerHTML = '';
  }
  let completedTodos = getTodosIsClass('completed', todos);
  if (completedTodos.length <= 1) {
    document.getElementById('todoList').innerHTML = '';
  }
  let newTodosId = getNewAddTodosId('newTodosId');
  let displayTodos = completedTodos;
  if (newTodosId) {
    displayTodos = deleteNewAdds(newTodosId, completedTodos);

  }
  displayLiTags(displayTodos);
}

let displayClearCompleted = () => {
  let todos = getTodos();
  if (todos) {
    let completedTodos = getTodosIsClass('completed', todos);
    if (completedTodos.length > 1) {
      document.getElementById('clearCompleted').style.visibility = 'visible';
    } else {
      document.getElementById('clearCompleted').style.visibility = 'hidden';
    }
  }

}

let completeClickedTodo = event => {
  if (event.target.tagName.toLowerCase() === 'li') {
    let clickedTodoId = event.target.childNodes[1].id;
    changeClickTodoStatus(clickedTodoId, 'completed');
  }
}


let clearCompletedTodos = () => {
  let todos = getTodos();
  todos = deleteCompletedTodos(todos);
  setTodos(todos);
  refreshTodosDisplay();
}

let deletedTodo = idOfDeletedTodo => {
  let todos = getTodos();
  let deletedTodos = deleteTodoById(idOfDeletedTodo, todos);
  setTodos(deletedTodos);
}
