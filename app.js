const formAddTodo = document.querySelector('.form-add')
const deleteTodo = document.querySelector('.button-delete')
const inputSearchTodo = document.querySelector('.form-search input')

const todosContainer = document.querySelector('.ul-container')

formAddTodo.addEventListener('submit', (event) => {
  event.preventDefault()

  const inputValue = event.target.add.value.trim()
  if (inputValue.length) {
    todosContainer.innerHTML += `
    <li class="li-container">
      <span>${inputValue}</span>
      <img class="button-delete" src="/assets/lixeira.svg" alt="Deletar">
    </li>
    `
    event.target.reset()
  }
})

todosContainer.addEventListener('click', event => {
  const clickedElement = event.target

  if (Array.from(clickedElement.classList).includes('button-delete')) {
    clickedElement.parentElement.remove()
  }
})

inputSearchTodo.addEventListener('input', event => {
  const inputValue = event.target.value.trim().toLowerCase()

  Array.from(todosContainer.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
      todo.classList.add('hidden')
    })

  Array.from(todosContainer.children)
    .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
      todo.classList.remove('hidden')
    })
})