// Select the todoContainer element from the DOM
const $todos = document.querySelector('.todoContainer');

// Export a Todos class as the default export
export default class Todos {
  // Define a constructor for the Todos class
  constructor() {
    // Retrieve the todoLis array from local storage or create an empty array if none exists
    this.todoList = JSON.parse(localStorage.getItem('todoList')) || [];

    // If the todoLis array is not empty, loop through each item and add it to the DOM
    if (this.todoList.length > 0) {
      this.todoList.forEach((todo) => {
        // Use insertAdjacentHTML to add a new todo item to the DOM
        $todos.insertAdjacentHTML(
          'beforeend',
          `<ul class="listcontainer ">
            <div class="checBox">
              <input type="checkbox" class="checkboxClass" id="myCheckbox">
            </div>
            <li class="list textTodo">${todo.list}</li>
            <i class="fa-solid fa-ellipsis-vertical vertical" ></i>
            <i class="fa-solid fa-trash-can delete" id="${todo.list}"></i>
          </ul>
          
          `,
        );
        // Add a click event listener to the remove button for each todo item
        const $removeButton = document.getElementById(`${todo.list}`);
        if ($removeButton) {
          $removeButton.addEventListener('click', () => {
            this.remove(`${todo.list}`);
          });
        }
      });
    };
  };
  // Define a remove method to remove a todo item from the DOM and the todoLis array
  remove = (idSelected) => {
    const parentElement = document.getElementById(idSelected).parentElement;
    if (parentElement) {
      parentElement.remove();
    }
    
    const indexToRemove = this.todoList.findIndex((e) => e.list === idSelected);
    if (indexToRemove > -1) {
      this.todoList.splice(indexToRemove, 1);
      localStorage.setItem('todoList', JSON.stringify(this.todoList));
    }
  };
  

  // Define an add method to add a new todo item to the DOM and the todoList array
  add = (list) => {
    const item = { list };
    this.todoList.push(item);
    $todos.insertAdjacentHTML(
      'beforeend',
      `<ul class="listcontainer ">
      <div class="checBox">
        <input type="checkbox" class="checkboxClass" id="myCheckbox">
      </div>
      <li class="list textTodo">${item.list}</li>
      <i class="fa-solid fa-ellipsis-vertical vertical" ></i>
      <i class="fa-solid fa-trash-can delete" id="${item.list}"></i>
    </ul>
    <hr>
    `,
    );
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
    // Add a click event listener to the remove button for the new todo item
    const $removeButton = document.getElementById(`${item.list}`)
    $removeButton.addEventListener('click', () => {
      this.remove(`${item.list}`); 
    });
  };  
};

