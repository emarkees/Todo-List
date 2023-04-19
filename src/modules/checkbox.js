function updateLocalStorage(todoList) {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

function initializeCheckbox($checkbox, index, todoList) {
  $checkbox.addEventListener('change', (e) => {
    e.preventDefault();
    const todoToUpdate = todoList[index];
    if (todoToUpdate) {
      todoToUpdate.completed = $checkbox.checked;
      updateLocalStorage(todoList, index);
    }
  });
}

function initializeCheckboxes(todoList) {
  const $checkboxes = document.querySelectorAll('.checkboxClass');
  $checkboxes.forEach(($checkbox, index) => {
    initializeCheckbox($checkbox, index, todoList);
  });
}

export default initializeCheckboxes;
