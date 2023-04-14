function clearCheckedItems(todoList) {
  const $clearBtn = document.querySelector('.button');
  $clearBtn.addEventListener('click', () => {
    todoList = todoList.filter((todo) => !todo.completed);
    localStorage.setItem('todoList', JSON.stringify(todoList));
    window.location.reload(); // reload the page
  });
}

export default clearCheckedItems;
