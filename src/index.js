import './style.css';
import UpdateList from './modules/updateList.js';
import initializeCheckboxes from './modules/checkbox.js';
import clearCompletedTodos from './modules/clearAll.js';

document.addEventListener('DOMContentLoaded', () => {
  const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
  UpdateList();
  initializeCheckboxes(todoList);
  clearCompletedTodos(todoList);
});