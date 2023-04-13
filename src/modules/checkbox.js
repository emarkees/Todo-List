export function initializeCheckboxes(todoList) {
  const $checkboxes = document.querySelectorAll('.checkboxClass');
  $checkboxes.forEach(($checkbox, index) => {
    $checkbox.addEventListener('change', () => {
      const todoToUpdate = todoList[index];
      if (todoToUpdate) {
        todoToUpdate.completed = $checkbox.checked;
        localStorage.setItem('todoList', JSON.stringify(todoList));
        console.log('1')
      }
      const $todoDescription = $checkbox.parentElement.nextElementSibling;
      if ($todoDescription) {
        $todoDescription.classList.toggle('complete', $checkbox.checked);
        console.log('2')
      }
     /* this.updateIndexes(); */
    });
  });
}
