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
        <i class="fa-solid fa-ellipsis-vertical vertical" ></i>
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
  };

  // Define a remove method to remove a todo item from the DOM and the todoList array
  remove = (indexToRemove) => {
    const { parentElement } = document.getElementById(`${this.todoList[indexToRemove].description}`);
    if (parentElement) {
      parentElement.remove();
    }

    if (indexToRemove > -1) {
      this.todoList.splice(indexToRemove, 1);
      this.updateIndexes();
      localStorage.setItem('todoList', JSON.stringify(this.todoList));
      this.updateIndexes(); // Update the indexes after removing an item
    }
  };
}