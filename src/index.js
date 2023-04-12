/* import _ from 'lodash'; */
import './style.css';
import UpdateList from './modules/updateList.js';
import { updateCheckboxes } from './modules/checkbox.js';
/*
import Checker from './modules/checkbox.js'; */

document.addEventListener('DOMContentLoaded', () => {
  UpdateList();
  updateCheckboxes();
 /* Checker(); */
});