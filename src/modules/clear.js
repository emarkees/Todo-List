/* const $todos = document.querySelector('.todoContainer');

clearCompleted = () => {
  // Use filter() to create a new array of all the incomplete todos
  const incompleteTodos = this.todoList.filter((todo) => !todo.completed);

  // Clear the DOM by removing all the existing todo items
  $todos.innerHTML = '';

  // Update the todoList array with the new array of incomplete todos
  this.todoList = incompleteTodos;

  // Update the DOM by adding each incomplete todo item to the DOM
  this.todoList.forEach((todo, index) => {
    $todos.insertAdjacentHTML(
      'beforeend',
      `<ul class="listcontainer ">
        <div class="checBox">
          <input type="checkbox" class="checkboxClass" id="myCheckbox"
          ${todo.completed ? 'checked' : ''}>
        </div>
        <li class="list textTodo"${todo.completed ? ' class="complete"' : ''}
          data-index="${index}">${todo.description}
        </li>
        <i class="fa-solid fa-ellipsis-vertical vertical" id="edit-${todo.description}" ></i>
        <i class="fa-solid fa-trash-can delete" id="${todo.description}"></i>
      </ul>
      `,
    );

    // Add a click event listener to the remove button for each todo item
    const $removeButton = document.getElementById(`${todo.description}`);
    if ($removeButton) {
      $removeButton.addEventListener('click', () => {
        this.remove(todo.index);
      });
    }

    // Add a click event listener to the edit button for each todo item
    const $editButton = document.getElementById(`edit-${todo.description}`);
    $editButton.addEventListener('click', () => {
      const $inputField = document.getElementById('input');
      $inputField.value = todo.description;
      const $addButton = document.getElementById('addBtn');

      $addButton.addEventListener('click', () => {
        const newDescription = $inputField.value;
        const indexToEdit = this.todoList.findIndex((e) => e.description === todo.description);

        if (newDescription !== '' && newDescription !== todo.description) {
          if (indexToEdit > -1) {
            this.edit(indexToEdit, newDescription);
            $editButton.id = `edit-${newDescription}`;
            $editButton.textContent = newDescription;
            this.updateIndexes();
          }
        } else {
          this.remove(indexToEdit);
          $editButton.parentElement.removeChild($editButton);
        }
      });
    });

    // Add a click event listener to the checkbox for each todo item
    const $checkboxes = document.querySelectorAll('.checkboxClass');
    $checkboxes.forEach(($checkbox, index) => {
      $checkbox.addEventListener('click', () => {
        const todoToUpdate = this.todoList[index];
        if (todoToUpdate) {
          todoToUpdate.completed = $checkbox.checked;
          localStorage.setItem('todoList', JSON.stringify(this.todoList));
        }
        const $todoDescription = $checkbox.parentElement.nextElementSibling;
        if ($todoDescription) {
          $todoDescription.classList.toggle('complete', $checkbox.checked);
        }
      });
    });
  });

  // Update local storage with the new todoList array
  localStorage.setItem('todoList', JSON.stringify(this.todoList));
};
export default clearCompleted; */