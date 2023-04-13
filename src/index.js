/* import _ from 'lodash'; */
import './style.css';
import UpdateList from './modules/updateList.js';
import { initializeCheckboxes } from './modules/checkbox.js';


/*

import Checker from './modules/checkbox.js'; */

document.addEventListener('DOMContentLoaded', () => {
  const todoList = JSON.parse(localStorage.getItem('todoList')) || []; console.log('3')
  UpdateList();
  initializeCheckboxes(todoList);
 /* Checker(); */
});