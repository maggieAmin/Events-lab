document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const resultParagraph = document.querySelector("#reading-list")
    const newListItems = document.createElement("li")

    newListItems.textContent = `
    ${event.target.title.value}
    ${event.target.author.value}
    ${event.target.category.value}
    `
  newListItems.classList.add('book')
  const list = document.querySelector("ul")
  list.appendChild(newListItems)
    document.getElementById("new-item-form").reset()
  })

  const button = document.querySelector(".deleteMe")
  button.addEventListener('click', () => {
    const newListItems = document.querySelector('#reading-list')
    newListItems.textContent = ''
  })

})


