"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["print"],{

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todos)\n/* harmony export */ });\nconst $todos = document.querySelector('.todoContainer');\n\n// Export a Todos class as the default export\nclass Todos {\n  // Define a constructor for the Todos class\n  constructor() {\n    // Retrieve the todoList array from local storage or create an empty array if none exists\n    this.todoList = JSON.parse(localStorage.getItem('todoList')) || [];\n\n    // If the todoList array is not empty, loop through each item and add it to the DOM\n    if (this.todoList.length > 0) {\n      this.todoList.forEach((todo, index) => {\n        // Use insertAdjacentHTML to add a new todo item to the DOM\n        $todos.insertAdjacentHTML(\n          'beforeend',\n          `<ul class=\"listcontainer \">\n            <div class=\"checBox\">\n              <input type=\"checkbox\" class=\"checkboxClass\" id=\"myCheckbox\">\n            </div>\n            <li class=\"list textTodo\">${todo.description}</li>\n            <i class=\"fa-solid fa-ellipsis-vertical vertical\" ></i>\n            <i class=\"fa-solid fa-trash-can delete\" id=\"${todo.description}\"></i>\n          </ul>\n          `,\n        );\n        // Add a click event listener to the remove button for each todo item\n        const $removeButton = document.getElementById(`${todo.description}`);\n        if ($removeButton) {\n          $removeButton.addEventListener('click', () => {\n            this.remove(todo.index);\n          });console.log('remove')\n        }\n        // Update the index property of the todo item\n        todo.index = index;\n        todo.completed = false;\n      });\n    }\n  }\n\n  updateIndexes = () => {\n    this.todoList.forEach((todo, index) => {\n      todo.index = index;\n    });\n  };\n\n  // Define an add method to add a new todo item to the DOM and the todoList array\n  add = (description) => {\n    const item = { description, index: this.todoList.length, completed: false };\n    this.todoList.push(item);\n    $todos.insertAdjacentHTML(\n      'beforeend',\n      `<ul class=\"listcontainer \">\n        <div class=\"checBox\">\n          <input type=\"checkbox\" class=\"checkboxClass\" id=\"myCheckbox\">\n        </div>\n        <li class=\"list textTodo\">${item.description}</li>\n        <i class=\"fa-solid fa-ellipsis-vertical vertical\" id=\"edit-${item.description}\" ></i>\n        <i class=\"fa-solid fa-trash-can delete\" id=\"${item.description}\"></i>\n      </ul>\n      `,\n    );\n    localStorage.setItem('todoList', JSON.stringify(this.todoList));\n    // Add a click event listener to the remove button for the new todo item\n    const $removeButton = document.getElementById(`${item.description}`);\n    $removeButton.addEventListener('click', () => { \n      const indexToRemove = this.todoList.findIndex((e) => e.description === item.description);\n      if (indexToRemove > -1) {\n        this.remove(indexToRemove);\n        this.updateIndexes();\n      }\n    });\n    this.updateIndexes(); // Update the indexes after adding an item\n\n    // Add a click event listener to the edit button for the new todo item\n    // Edit button\n    const $editButton = document.getElementById(`edit-${item.description}`);\n    $editButton.addEventListener('click', () => {\n      const $inputField = document.getElementById('input'); // input div\n      $inputField.value = item.description;\n      const $addButton = document.getElementById('addBtn'); // add button\n\n      // Edit button click handler\n      $addButton.addEventListener('click', () => {\n        const newDescription = $inputField.value;\n        const indexToEdit = this.todoList.findIndex((e) => e.description === item.description);\n\n        if (newDescription !== '' && newDescription !== item.description) {\n          if (indexToEdit > -1) {\n            // Edit item \n            \n            this.edit(indexToEdit, newDescription);\n            $editButton.id = `edit-${newDescription}`;\n            $editButton.textContent = newDescription;\n            this.updateIndexes();\n          }\n        } else {\n          // Delete item previous item\n          // $editButton.parentElement.removeChild($editButton);\n          this.remove(indexToEdit); \n        }\n      });\n    });\n\n    \n\n    // Add a click event listener to the checkbox for each todo item\n    /* const $checkboxes = document.querySelectorAll('.checkboxClass');\n    $checkboxes.forEach(($checkbox, index) => {\n      $checkbox.addEventListener('change', () => {\n        const todoToUpdate = this.todoList[index];\n        if (todoToUpdate) {\n          todoToUpdate.completed = $checkbox.checked;\n          localStorage.setItem('todoList', JSON.stringify(this.todoList));\n        }\n        const $todoDescription = $checkbox.parentElement.nextElementSibling;\n        if ($todoDescription) {\n          $todoDescription.classList.toggle('complete', $checkbox.checked);\n        }\n      });this.updateIndexes()\n    }); */\n  };\n\n  edit = (indexToEdit, newDescription) => {\n    // Retrieve the todo item to edit from the todoList array\n    const todoToEdit = this.todoList[indexToEdit];\n\n    // If the todo item exists, update its description and update the DOM\n    if (todoToEdit) {\n      todoToEdit.description = newDescription;\n      console.log('9');\n      const $todoDescription = document.querySelector(`.textTodo[data-index=\"${indexToEdit}\"]`);\n      if ($todoDescription) {\n        $todoDescription.textContent = newDescription;\n        this.updateIndexes();\n        console.log('8');\n      }\n      localStorage.setItem('todoList', JSON.stringify(this.todoList));\n    }\n  };\n\n  // Define a remove method to remove a todo item from the DOM and the todoList array\n  remove = (indexToRemove) => {\n    const todoToRemove = this.todoList[indexToRemove];\n\n    if (todoToRemove) { // Check if todoToRemove is defined\n      const { parentElement } = document.getElementById(todoToRemove.description);\n      console.log('4');\n      if (parentElement) {\n        parentElement.remove();\n        console.log('5');\n      } else {\n        this.updateIndexes();\n        console.log('6');\n      }\n\n      if (indexToRemove > -1) {\n        this.todoList.splice(indexToRemove, 1);\n        this.updateIndexes();\n        localStorage.setItem('todoList', JSON.stringify(this.todoList));\n        console.log('7');\n      }\n\n      this.updateIndexes(); // Update the indexes after removing an item\n    }\n  };\n}\n\n//# sourceURL=webpack://todo-list/./src/print.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/print.js"));
/******/ }
]);