let processSomeDataInLS = status => {
  setButtonStatusTo(status);
  deleteNewTodoIdsInLS();
}

let refreshDisplay = buttonId => {
  let status = getStrFromLocalStorage('buttonStatus');
  displayTodos(status)
  displayLeftItemsOfTodos();
  displayClearCompleted();
  clearInputBox();
  if (buttonId) {
    changeButtonsColor(buttonId);
  }
}

let displayTodos = status => {
  let todos = getArrFromLocalStorage('todos');
  if (!todos) {
    return;
  }
  let displayTodos = todos;
  if(status!=='all') {
    displayTodos = getTodosIsClass(status,todos);
  }
  displayLiTags(displayTodos);
}

let getTodosIsClass = (status, todos) => {
  return todos.filter(todo => todo.status === status);
}

let noDisplayNewAddTodo = completedTodos => {
  let newTodoIds = getArrFromLocalStorage('newTodoIds');
  if (!newTodoIds) {
    return completedTodos;
  }
  return completedTodos.filter(todo => !newTodoIds.includes(todo.id));
}

let displayLiTags = todos => {
  let liTags = todos.map(todo =>
    `<li class ="${todo.status}">${todo.content}<span id="${todo.id}" onclick="deleteTodoListener(event)">x</span></li>`);
  document.getElementById('todoList').innerHTML = liTags.join('\n');
}

let displayLeftItemsOfTodos = () => {
  let todos = getArrFromLocalStorage('todos');
  let leftItems = 0;
  if(!todos) {
    return;
  }
  let activeTodos = getTodosIsClass('active',todos);
  if(activeTodos.length){
    leftItems=activeTodos.length;
  }
  document.getElementById('leftItems').innerHTML = `Left items:${leftItems}`;
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

let clearInputBox = () => document.getElementById('inputBox').value = '';

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
  let content = document.getElementById('inputBox').value;
  if (!content.length) {
    return;
  }
  let status = 'active';
  let id = new Date();
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
  todos = todos.filter(todo => todo.status !== 'completed');
  setTodos(todos);
}

let completeClickedTodo = event => {
  if (event.target.tagName.toLowerCase() === 'li') {
    let clickedTodoId = event.target.childNodes[1].id;
    changeClickTodoStatus(clickedTodoId, 'completed');
  }
}

let changeClickTodoStatus = (clickedTodoId, status) => {
  let todos = getArrFromLocalStorage('todos');
  todos.map(todo => {
    if (todo.id === clickedTodoId) {
      todo.status = status;
    }
    return todo;
  });
  setTodos(todos);
}

let deletedTodo = cilckedTodoId => {
  let todos = getArrFromLocalStorage('todos');
  let unclickedTodos = todos.filter(todo => todo.id !== cilckedTodoId);
  setTodos(unclickedTodos);
}
