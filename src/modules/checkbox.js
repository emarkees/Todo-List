/*import Todos from '../print.js'; */

export function updateCheckboxes() {
  const $checkboxes = document.querySelectorAll('.checkboxClass');
    $checkboxes.forEach(($checkbox, index) => {
      $checkbox.addEventListener('change', () => {
        const todoToUpdate = this.todoList[index];
        if (todoToUpdate) {
          todoToUpdate.completed = $checkbox.checked;
          localStorage.setItem('todoList', JSON.stringify(this.todoList));
        }
        const $todoDescription = $checkbox.parentElement.nextElementSibling;
        if ($todoDescription) {
          $todoDescription.classList.toggle('complete', $checkbox.checked);
        }
      });this.updateIndexes()
    });
}
