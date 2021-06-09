const formAddTodo = document.querySelector('.form-add')
const deleteTodo = document.querySelector('.button-delete')
const inputSearchTodo = document.querySelector('.form-search input')
const todosContainer = document.querySelector('.ul-container')

const addTodo = inputValue => {
  if (inputValue.length) {
    todosContainer.innerHTML += `
    <li class="li-container" data-todo="${inputValue}">
      <span>${inputValue}</span>
      <img class="button-delete" src="/assets/lixeira.svg" alt="Deletar" data-trash="${inputValue}">
    </li>
    `
    event.target.reset()
  }
}

formAddTodo.addEventListener('submit', (event) => {
  event.preventDefault()

  const inputValue = event.target.add.value.trim()
  addTodo(inputValue)
})

const removeTodo = clickedElement => {
  const trashDataValue = clickedElement.dataset.trash

  if (trashDataValue) {
    document.querySelector(`[data-todo="${trashDataValue}"]`).remove()
  }
}

todosContainer.addEventListener('click', event => {
  const clickedElement = event.target
  removeTodo(clickedElement)
})

const filterTodos = (todos, inputValue, returnMatchedTodos) => todos
  .filter(todo => {
    const matchedTodos = todo.textContent.toLowerCase().includes(inputValue)
    return returnMatchedTodos ? matchedTodos : !matchedTodos
  })

const manipulateClasses = (todos, classToAdd, classToRemove) => {
  todos.forEach(todo => {
    todo.classList.remove(classToRemove)
    todo.classList.add(classToAdd)
  })
}

const hideTodos = (todos, inputValue) => {
  const todosToHide = filterTodos(todos, inputValue, false)
  manipulateClasses(todosToHide, 'hidden', 'showing')
}

const showTodos = (todos, inputValue) => {
  const todosToShow = filterTodos(todos, inputValue, true)
  manipulateClasses(todosToShow, 'showing', 'hidden')
}

inputSearchTodo.addEventListener('input', event => {
  const inputValue = event.target.value.trim().toLowerCase()
  const todos = Array.from(todosContainer.children)

  hideTodos(todos, inputValue)
  showTodos(todos, inputValue)
})