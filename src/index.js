document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) =>{
    console.log(form)
    e.preventDefault()
    console.log(e.target.new_task_description)
    buildToDo(e.target.new_task_description.value)
    form.reset()
  })
});

function buildToDo(todo){
  console.log(todo)
  let p = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = ' x'
  p.textContent = `${todo} `
  p.appendChild(btn)
  console.log(document.querySelector('#main-content'))
  document.querySelector('#tasks').appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}
