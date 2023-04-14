function initializeCheckboxes(todoList) {
  const $checkboxes = document.querySelectorAll('.checkboxClass');
  $checkboxes.forEach(($checkbox, index) => {
    $checkbox.addEventListener('change', (e) => {
      e.preventDefault();
      const todoToUpdate = todoList[index];
      if (todoToUpdate) {
        todoToUpdate.completed = $checkbox.checked;
        localStorage.setItem('todoList', JSON.stringify(todoList));
      }
    });
  });
} export default initializeCheckboxes;
