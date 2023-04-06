import Todos from "../print";

//Access the add button
const $error = document.querySelector('.error');
const $lists = document.querySelector('.input');
const $addButton = document.querySelector('.addButton');
const $listSection = document.querySelector('.lists')
const ListObj = new Todos();

const updateList = () => {
  $addButton.addEventListener('click', () => {
    if ($lists.value !== '') {
      ListObj.add($lists.value.trim());
      $error.style.display = 'none';
      $lists.value = '';
    } /*else {
      $error.style.display = 'block';
      setTimeout(() => {
        $error.style.display = 'none';
      }, 1500);
    }*/
  });

  $addButton.addEventListener('click', () => {
    $listSection.style.display = 'block'
  });
}; export default updateList;