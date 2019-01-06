

let generateNewTodo = () => {
  let content = getInputContent();
  if (!content.length) {
    return;
  }
  let status = 'active';
  let id = new Date();
  if (getButtonStatus() === 'completed') {
    status = 'completed';
    // setNewAddTodoId(id);
  }
  return new Todo(content, status, id);
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
  let ButtonStatus = getButtonStatus();
  switch (ButtonStatus) {
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
  // if(status==='completed'&&displayTodos) {
  //    displayTodos = deleteNewAddTodo(displayTodos);
  //    alert(displayTodos)
  // }
  if (displayTodos) {
    displayLiTags(displayTodos);
  }
}

let changeButtonActiveColor = () => {
  document.getElementById('completed').style.background = '';
  document.getElementById('all').style.background = '';
  document.getElementById('active').style.background = 'pink';
}

// let displayActiveTodos = () => {
//   let todos = getTodos();
//   let activeTodos = getTodosIsClass('active', todos);
//   displayLiTags(activeTodos);
// }

let changeButtonCompletedColor = () => {
  document.getElementById('completed').style.background = 'pink';
  document.getElementById('all').style.background = '';
  document.getElementById('active').style.background = '';
}


// let displayCompletedTodos = () => {
//   let todos = getTodos();
//   let completedTodos = getTodosIsClass('completed', todos);
//   displayLiTags(completedTodos);
// }

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
    return;
  }
  let completedTodos = getTodosIsClass('completed', todos);
  if (completedTodos.length <= 1) {
    return;
  }
  let displayTodos = completedTodos.slice(0, completedTodos.length - 1);
  displayLiTags(displayTodos);

}