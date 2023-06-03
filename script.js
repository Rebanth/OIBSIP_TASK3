const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const todoText = input.value.trim();
  if (todoText !== '') {
    addTodoItem(todoText);
    input.value = '';
  }
});

todoList.addEventListener('click', function (e) {
  const target = e.target;
  if (target.classList.contains('delete-btn')) {
    const todoItem = target.closest('li');
    todoItem.remove();
  }
});

function addTodoItem(todoText) {
  const li = document.createElement('li');
  li.innerHTML = `
    <input type="checkbox" class="checkbox">
    <span class="todo-text">${todoText}</span>
    <div class="todo-actions">
      <button class="delete-btn">Delete</button>
    </div>
  `;
  todoList.appendChild(li);
}
