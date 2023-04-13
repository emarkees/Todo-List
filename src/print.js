const $todos = document.querySelector('.todoContainer');

// Export a Todos class as the default export
export default class Todos {
  // Define a constructor for the Todos class
  constructor() {
    // Retrieve the todoList array from local storage or create an empty array if none exists
    this.todoList = JSON.parse(localStorage.getItem('todoList')) || [];

    // If the todoList array is not empty, loop through each item and add it to the DOM
    if (this.todoList.length > 0) {
      this.todoList.forEach((todo, index) => {
        // Use insertAdjacentHTML to add a new todo item to the DOM
        $todos.insertAdjacentHTML(
          'beforeend',
          `<ul class="listcontainer ">
            <div class="checBox">
              <input type="checkbox" class="checkboxClass" id="myCheckbox">
            </div>
            <li class="list textTodo">${todo.description}</li>
            <i class="fa-solid fa-ellipsis-vertical vertical" ></i>
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
        // Update the index property of the todo item
        todo.index = index;
        todo.completed = false;
      });
    }
  }

  updateIndexes = () => {
    this.todoList.forEach((todo, index) => {
      todo.index = index;
    });
  };

  // Define an add method to add a new todo item to the DOM and the todoList array
  add = (description) => {
    const item = { description, index: this.todoList.length, completed: false };
    this.todoList.push(item);
    $todos.insertAdjacentHTML(
      'beforeend',
      `<ul class="listcontainer ">
        <div class="checBox">
          <input type="checkbox" class="checkboxClass" id="myCheckbox">
        </div>
        <li class="list textTodo">${item.description}</li>
        <i class="fa-solid fa-ellipsis-vertical vertical" id="edit-${item.description}" ></i>
        <i class="fa-solid fa-trash-can delete" id="${item.description}"></i>
      </ul>
      `,
    );
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
    // Add a click event listener to the remove button for the new todo item
    const $removeButton = document.getElementById(`${item.description}`);
    $removeButton.addEventListener('click', () => {
      const indexToRemove = this.todoList.findIndex((e) => e.description === item.description);
      if (indexToRemove > -1) {
        this.remove(indexToRemove);
        this.updateIndexes();
      }
    });
    this.updateIndexes(); // Update the indexes after adding an item

    // Add a click event listener to the edit button for the new todo item
    // Edit button
    const $editButton = document.getElementById(`edit-${item.description}`);
    $editButton.addEventListener('click', () => {
      const $inputField = document.getElementById('input'); // input div
      $inputField.value = item.description;
      const $addButton = document.getElementById('addBtn'); // add button

      // Edit button click handler
      $addButton.addEventListener('click', () => {
        const newDescription = $inputField.value;
        const indexToEdit = this.todoList.findIndex((e) => e.description === item.description);

        if (newDescription !== '' && newDescription !== item.description) {
          if (indexToEdit > -1) {
            // Edit item
            this.edit(indexToEdit, newDescription);
            $editButton.id = `edit-${newDescription}`;
            $editButton.textContent = newDescription;
            this.updateIndexes();
          }
        } else {
          // Delete item previous item
          // $editButton.parentElement.removeChild($editButton);
          this.remove(indexToEdit);
        }
      });
    });

    // Add a click event listener to the checkbox for each todo item
   /*const $checkboxes = document.querySelectorAll('.checkboxClass');
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
    }); */
  };

  edit = (indexToEdit, newDescription) => {
    // Retrieve the todo item to edit from the todoList array
    const todoToEdit = this.todoList[indexToEdit];

    // If the todo item exists, update its description and update the DOM
    if (todoToEdit) {
      todoToEdit.description = newDescription;
      console.log('9')
      const $todoDescription = document.querySelector(`.textTodo[data-index="${indexToEdit}"]`);
      if ($todoDescription) {
        $todoDescription.textContent = newDescription;
        this.updateIndexes();
        console.log('8')
      }
      localStorage.setItem('todoList', JSON.stringify(this.todoList));
    }
  };

  // Define a remove method to remove a todo item from the DOM and the todoList array
  remove = (indexToRemove) => {
    const todoToRemove = this.todoList[indexToRemove];

    if (todoToRemove) { // Check if todoToRemove is defined
      const { parentElement } = document.getElementById(todoToRemove.description);
      console.log('4')
      if (parentElement) {
        parentElement.remove();
        console.log('5')
      } else {
        this.updateIndexes();
        console.log('6')
      }

      if (indexToRemove > -1) {
        this.todoList.splice(indexToRemove, 1);
        this.updateIndexes();
        localStorage.setItem('todoList', JSON.stringify(this.todoList));
        console.log('7')
        
      }

      this.updateIndexes(); // Update the indexes after removing an item
    }
  };
}