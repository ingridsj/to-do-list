const formAddTodo = document.querySelector('.form-add')
const todosContainer = document.querySelector('.ul-container')

formAddTodo.addEventListener('submit', (event) => {
  event.preventDefault()

  const inputValue = event.target.add.value.trim()
  if(inputValue.length) {
    todosContainer.innerHTML += `
    <li class="li-container">
      <span>${inputValue}</span>
      <button class="button-delete"><img src="/assets/lixeira.svg" alt="Deletar"></button>
    </li>
    `
    event.target.reset()
  }
})