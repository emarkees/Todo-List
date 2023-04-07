import Todos from '../print.js';

// Access the add button
const $error = document.querySelector('.error');
const $list = document.querySelector('input');
const $addBtn = document.querySelector('.addBtn');
/* const $listSection = document.querySelector('.lists') */
const ListObj = new Todos();

const UpdateList = () => {
  $addBtn.addEventListener('click', (b) => {
    b.preventDefault();
    if ($list.value !== '') {
      ListObj.add($list.value.trim());
      $error.style.display = 'none';
      $list.value = '';
    } else {
      $error.style.display = 'none';
      setTimeout(() => {
        $error.style.display = 'none';
      }, 1500);
    }$list.value = '';
  });
}; export default UpdateList;
