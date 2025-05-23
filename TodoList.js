const Arraytask =JSON.parse(localStorage.getItem("tasks"))|| [{Name:"Pick up groceries",Due_date:"2025-05-31",completed:false}, {Name:"Walk the dog",Due_date:"2025-05-31",completed:false} ];
display(); // Array to store tasks
// Array to store tasks

function AddItem() {
  var inputElement = document.getElementById("taskinput"); // Get the element
  var Name = inputElement.value; 
  var dateElement = document.querySelector(".dateinput");
  var Due_date= dateElement.value; // Get the element
   if (Name.trim() === "") {
  alert("Please enter a task!");
  return;
}// Get the value
  Arraytask.push({
    // Name:input,Due_date:date
    Name,Due_date,completed:false// Use shorthand property names when property and variable names are the same 
  });// Add value to array
  inputElement.value = "";
  dateElement.value = "";         // Clear the input field  
  display();  // Display the updated list 
  saveTasks();   
}
function display() {
   let listobj = ""; // Initialize an empty string for the list

  // ✅ This part handles when the array is empty
  if (Arraytask.length === 0) {
    document.getElementById("list").innerHTML = "<p>No tasks yet. Add something!</p>";
    return; // Stop here if no tasks
  }

  // ✅ This part builds HTML when tasks exist
    for (let i = 0; i < Arraytask.length; i++) {
      const Todolist_object=Arraytask[i];
      // const name= Todolist_object.Name;
      // const due_date= Todolist_object.Due_date;
      const{Name,Due_date}=Todolist_object; // Destructure the object to get name and due_date
      listobj += `
        <div class="list-item">
          <input type="checkbox" class="checkbox" ${Todolist_object.completed ? "checked" : ""} onchange="toggleComplete(${i})" />
          <div class="${Todolist_object.completed ? "completed" : ""}">${Name}</div><div> ${Due_date} </div>
          <button onclick='Deleteitem(${i})' class="delete">Delete</button>
          <br>
        </div>
      `;
    }
  document.getElementById("list").innerHTML = listobj;
  saveTasks(); // Save the tasks to local storage
}

  // display(Arraytask)
function Deleteitem(index){
    Arraytask.splice(index,1);
    display();
    saveTasks(); // Save the updated tasks to local storage
  
}
function toggleComplete(index) {
  Arraytask[index].completed=!Arraytask[index].completed; // Toggle the completed status
  display(); // Update the display
  saveTasks(); }// Save the updated tasks to local storage
function saveTasks(){
  localStorage.setItem("tasks", JSON.stringify(Arraytask));
  // Save the tasks to local storage
}

 

  //1.Save the data 
  //2.generate the html
  //3.Make it interactive



  