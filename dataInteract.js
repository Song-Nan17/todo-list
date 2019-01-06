let getInputContent = () => document.getElementById('inputBox').value;
let getStatus = () => localStorage.getItem('status');
let getTodos = () => localStorage.getItem('todos');
let setTodos = todos => localStorage.setItem('todos', todos);
let clearInputBox = () => {
  let input = document.getElementById('inputBox');
  input.value = '';
}

let setStatus = () => localStorage.setItem('status', 'completed');

let deleteStatus = () => localStorage.removeItem('status');
