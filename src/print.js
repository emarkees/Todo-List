const todoList = document.querySelector('.todoContainer');

const data = [
  {
    description: 'Meet with Ken by 10 am Today',
    completed: false,
    index: 3,
  },
  {
    description: 'Grace Anniversary',
    completed: false,
    index: 2,
  },
  {
    description: 'Visit mama',
    completed: false,
    index: 1,
  },
];

data.sort((a, b) => a.index - b.index);

let html = '';

data.forEach((item) => {
  html += `
  <div>
    <ul class="listcontainer ">
      <div class="checBox">
        <input type="checkbox" class="k">
      </div>
      <li class="list textTodo">${item.description}</li><i class="fa-solid fa-ellipsis-vertical vertical" ></i>
    </ul>
   
    
  </div>
  <hr>
  
  `;
});

todoList.innerHTML = html;
