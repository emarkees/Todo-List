const $todos = document.querySelector('.todoContainer');

export default class Todos {
  constructor() {
    this.todoList = JSON.parse(localStorage.getItem('todoList')) || [];

    if (this.todoList.length > 0) {
      this.todoList.forEach((todo, index) => {
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

    const $removeButton = document.getElementById(`${item.description}`);
    $removeButton.addEventListener('click', () => {
      const indexToRemove = this.todoList.findIndex((e) => e.description === item.description);
      if (indexToRemove > -1) {
        this.remove(indexToRemove);
        this.updateIndexes();
      }
    });
    this.updateIndexes(); // Update the indexes after adding an item

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
            this.edit(indexToEdit, newDescription);
            $editButton.id = `edit-${newDescription}`;
            $editButton.textContent = newDescription;
            this.updateIndexes();
          }
        } else {
          this.remove(indexToEdit);
        }
      });
    });

  };

  edit = (indexToEdit, newDescription) => {
    const todoToEdit = this.todoList[indexToEdit];

    if (todoToEdit) {
      todoToEdit.description = newDescription;
      const $todoDescription = document.querySelector(`.textTodo[data-index="${indexToEdit}"]`);
      if ($todoDescription) {
        $todoDescription.textContent = newDescription;
        this.updateIndexes();
      }
      localStorage.setItem('todoList', JSON.stringify(this.todoList));
    }
  };

  // Define a remove method to remove a todo item from the DOM and the todoList array
  remove = (indexToRemove) => {
    const todoToRemove = this.todoList[indexToRemove];

    if (todoToRemove) { 
      const { parentElement } = document.getElementById(todoToRemove.description);
      if (parentElement) {
        parentElement.remove();
      } else {
        this.updateIndexes();
      }

      if (indexToRemove > -1) {
        this.todoList.splice(indexToRemove, 1);
        this.updateIndexes();
        localStorage.setItem('todoList', JSON.stringify(this.todoList));
      }

      this.updateIndexes();
    }
  };
}