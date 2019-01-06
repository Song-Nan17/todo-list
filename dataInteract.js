let getInputContent = () => document.getElementById('inputBox').value;
let getTodos = () => {
  let todos = localStorage.getItem('todos');
  return JSON.parse(todos);
}
let setTodos = todos => {
  todos = JSON.stringify(todos);
  localStorage.setItem('todos', todos);
}
let clearInputBox = () => {
  let input = document.getElementById('inputBox');
  input.value = '';
}

let getButtonStatus = () => localStorage.getItem('buttonStatus');
let setButtonStatusTo = (status) => localStorage.setItem('buttonStatus', status);


let getTodosIsClass = status => {
  let todos = getTodos();
  return todos.filter(todo => todo.status === status);; 
}
let getLiTags = completedTodos => completedTodos.map(todo =>
  `<li class ="${todo.status}">${todo.content}<span>x</span></li>`);


  // let todos = localStorage.getItem('todos');
  // todos = JSON.parse(todos);
  // let completedTodos=todos.filter(todo => {
  //   if(todo.status === 'completed') {
  //     return todo;
  //   }
  // });
  // console.log(completedTodos);