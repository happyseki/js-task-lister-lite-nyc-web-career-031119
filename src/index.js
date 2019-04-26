//THE addEventListener WILL WAIT UNTIL THAT DOM CONTENT(ALL THAT HTML)
//IS LOADED ON THE PAGE AND THEN IT WILL DO STH.
//THE EVENT WILL WAIT UNTIL THE DOM LOADS
document.addEventListener("DOMContentLoaded", () => {
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
});



/*
document.addEventListener("DOMContentLoaded", () => {
 let description = document.querySelector("#description")
 let form = document.querySelector("#create-task-form")
 let list = document.querySelector("#tasks")

 form.addEventListener("submit", function(e) {
   e.preventDefault()
   let task = description.value
   let newLi = document.createElement("li")
   newLi.innerText = task
   list.appendChild(newLi)
   deleteButton.addEventListener('click', function(e)){
     newLi.remove()
   }
 })
  form.reset()
});
*/
