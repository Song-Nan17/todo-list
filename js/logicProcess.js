let processSomeDataInLS = status => {
  setButtonStatusTo(status);
}

let refreshDisplay = buttonId => {
  const status = getStrFromLocalStorage('buttonStatus');
  displayTodos(status)
  displayLeftItems();
  displayClearCompleted();
  clearInputBox();
  if (buttonId) {
    changeButtonsColor(buttonId);
  }
}

let displayTodos = status => {
  let displayTodos = getTodosFromStorage();
  if(status!=='all') {
    displayTodos = getTodosIsClass(status);
  }
  displayLiTags(displayTodos);
  changeCheckBox();
}

let getTodosIsClass = (status) => {
  const todos = getTodosFromStorage();
  if(!todos) {
    return [];
  }
  return todos.filter(todo => todo.status === status);
}


let displayLiTags = todos => {
  const liTags = todos.map(todo =>
    `<li class ="${todo.status}"  id="${todo.id}"><input type = "checkBox"><p>${todo.content}</p><span onclick="deleteTodoListener(event)">-</span></li>`);
  document.getElementById('todoList').innerHTML = liTags.join('\n');
}

let changeCheckBox =()=> {
  const completedLis = document.getElementsByClassName('completed');
  for (let i = 0;i<completedLis.length;i++) {
    completedLis[i].childNodes[0].checked='true';
}
}
let displayLeftItems = () => {
  const activeTodos = getTodosIsClass('active');
  const leftItems=activeTodos.length;
  document.getElementById('leftItems').innerHTML = `Left items:${leftItems}`;
}

let displayClearCompleted = () => {
  const todos = getTodosFromStorage();
  if (todos) {
    const completedTodos = getTodosIsClass('completed', todos);
    if (completedTodos.length > 1) {
      document.getElementById('clearCompleted').style.visibility = 'visible';
    } else {
      document.getElementById('clearCompleted').style.visibility = 'hidden';
    }
  }

}

let clearInputBox = () => document.getElementById('inputBox').value = '';

let changeButtonsColor = buttonId => {
  const buttons = document.getElementsByTagName('input');
  for (i = 0; i < buttons.length; i++) {
    buttons[i].style.background = '';
    buttons[i].style['border-color'] = '';
    buttons[i].style.color = '';
  }
  document.getElementById(buttonId).style.background ='rgb(24, 23, 23)';
  document.getElementById(buttonId).style['border-color'] ='rgb(24, 23, 23)';
  document.getElementById(buttonId).style.color ='#DDD';
}

let addNewTodo = () => {
  const todo = generateNewTodo();
  addTodo(todo);
}

let generateNewTodo = () => {
  const content = document.getElementById('inputBox').value;
  if (!content.length) {
    return;
  }
  const status = 'active';
  const id = new Date();
  return new Todo(content, status, id);
}

let addTodo = todo => {
  if (!todo) {
    return;
  }
  let todos = getTodosFromStorage();
  if (!todos) {
    todos = [];
  }
  todos.push(todo);
  setTodos(todos);
}

let clearCompletedTodos = () => {
  let todos = getTodosFromStorage();
  todos = todos.filter(todo => todo.status !== 'completed');
  setTodos(todos);
}

let completeClickedTodo = event => {
  if (event.target.tagName.toLowerCase() === 'p'||'input') {
    const clickedTodoId = event.target.parentNode.id;
    changeClickTodoStatus(clickedTodoId, 'completed');
  }
}

let changeClickTodoStatus = (clickedTodoId, status) => {
  let todos = getTodosFromStorage();
  todos.map(todo => {
    if (todo.id === clickedTodoId) {
      todo.status = status;
    }
    return todo;
  });
  setTodos(todos);
}

let deletedTodo = event => {
  const todos = getTodosFromStorage();
  const clickedTodoId = event.target.parentNode.id;
  const unclickedTodos = todos.filter(todo => todo.id !== clickedTodoId);
  setTodos(unclickedTodos);
}
