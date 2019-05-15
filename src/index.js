//THE addEventListener WILL WAIT UNTIL THAT DOM CONTENT(ALL THAT HTML)
//IS LOADED ON THE PAGE AND THEN IT WILL DO STH.
//THE EVENT WILL WAIT UNTIL THE DOM LOADS
document.addEventListener("DOMContentLoaded", () => {
 const form = document.getElementById('create-task-form');
 const input = document.getElementById('new-task-description');
 const tasks = document.getElementById('tasks')
 form.addEventListener('submit', e=>{
   e.preventDefault()
   // pull the value
    const newTask = input.value
    //add to li
    const list = document.createElement('li')
    //put value to list innerText
    list.innerText = newTask
    //append li to ul
    tasks.appendChild(list)
    //add delete button
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'x'
    list.appendChild(deleteButton)
    deleteButton.addEventListener('click',e=>{
      list.remove()
    })
    form.reset()
   })

});

/*
//need user input
const input = document.querySelector("#new-task-description")
//I want to wait until the user clicks that submit before I
// pull that value, anything in description is after the user types
//in and then click submit. clickevent is for form
const form = document.querySelector("#create-task-form")
form.addEventListener("submit", function(e){
//prevent sort of page refresh action, REMEMBER INVOKE IT
  e.preventDefault();
//pull its value
  const newTask = input.value
  //want to add to list
  const list = document.querySelector("#tasks")
  const newLi = document.createElement("li")
  newLi.innerText = newTask
  // add delete button
  const deleteButton = document.createElement("button")
  deleteButton.innerText = "x"
 list.appendChild(newLi)
 newLi.appendChild(deleteButton)
 deleteButton.addEventListener("click", function(e){
   newLi.remove()
 })
  form.reset()
})
const buttonParent = document.querySelector("#button-mommy");
buttonParent.addEventListener("click", function(e){
  console.log("somewhere in the parent");
  if(e.target.id === "alert"  ){
     console.log('only alert');
  }
})
*/
