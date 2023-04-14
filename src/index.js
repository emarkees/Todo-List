/* import _ from 'lodash'; */
import './style.css';
import UpdateList from './modules/updateList.js';
import initializeCheckboxes from './modules/checkbox.js';
import clearCheckedItems from './modules/clearAll.js';

document.addEventListener('DOMContentLoaded', () => {
  const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
  UpdateList();
  initializeCheckboxes(todoList);
  clearCheckedItems(todoList);
});