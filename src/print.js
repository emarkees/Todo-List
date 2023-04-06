const $lists = document.querySelector('.todoContainer');

export default class Todos {
  constructor() {
    this.todoList = JSON.parse(localStorage.getItem('todoList')) || [];
    if (this.todoList.length > 0) {
      this.todoList.forEach((todo) => {
        $lists.insertAdjacentHTML(
          'beforeend',
          `<ul class="listcontainer ">
          <div class="checBox">
            <input type="checkbox" class="k">
          </div>
          <li class="list textTodo">${todo.list}</li><i class="fa-solid fa-ellipsis-vertical vertical" ></i>
        </ul>
      <hr>
      `,
        ); 
       /* const $toggleClick = document.getElementById(`${todo.list}`)
        $toggleClick.addEventListener('click', () => {
          this.remove(`${todo.list}`)
        });*/
      });
    }
  }
  remove = (idSelected) => {
    document.getElementById(idSelected).parentElement.remmove();
    this.todoList.splice(
    this.todoList.findIndex((event) => event.list === idSelected), 
      1,
    );
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  add = (list) => {
      const item = { list };
      this.todoList = { item };
      $lists.insertAdjacentHTML(
      'beforeend',
          `<ul class="listcontainer ">
          <div class="checBox">
            <input type="checkbox" class="k">
          </div>
          <li class="list textTodo">${item.list}</li><i class="fa-solid fa-ellipsis-vertical vertical" ><i class=" fa-solid fa-arrow-down-left right"></i></i>
        </ul>
      <hr>
      `,
      ); 
      localStorage.setItem('todoList', JSON.stringify(this.todoList));
      const $toggleClick = document.getElementById(`${item.list}`)
      $toggleClick.addEventListener('click', () => {
        this.add(`${item.list}`)
       });
    };  
};
