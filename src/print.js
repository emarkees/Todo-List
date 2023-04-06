const todoList = document.querySelector('.todoContainer')

const todo = [
  {
    id: 0,
    List: 'Meet with Ken',
  },
  {
    id: 1,
    List: 'Meet with Ken',
  },
  {
    id: 2,
    List: 'Meet with Ken',
  },
];

let html = '';

todo.forEach((item) => {
  html += `
 
    <ul class="listcontainer ">
      <div class="checBox">
        <input type="checkbox" class="k">
      </div>
      <li class="list textTodo">${item.List}</li><i class="fa-solid fa-ellipsis-vertical vertical" ><i class=" fa-solid fa-arrow-down-left right"></i></i>
    </ul>
   
    
  </div>
  <hr>
  
  `;
});


todoList.innerHTML = html;