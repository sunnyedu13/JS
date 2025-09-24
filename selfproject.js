let = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let clearBtn = document.getElementById("clearBtn");
let taskList = document.getElementById("taskList")


addBtn.addEventListener ("click",()=>{

    let taskText = taskInput.value.trim();  // remove spaces
if (taskText === "") {
        alert("⚠️ Please enter a task!");
        return;
}


let li = document.createElement("li");
li.textContent = taskText;  

li.addEventListener("click",()=>{
    li.classList.toggle("completed");
});

      const delBtn = document.createElement("button");
      delBtn.textContent = "❌";
      delBtn.className = "deleteBtn";

       delBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        li.remove();
      });
      // Append delete button to li
      li.appendChild(delBtn);

      // Add li to task list
      taskList.appendChild(li);

      // Clear input field
      taskInput.value = "";
    });

    // ===== Clear All Tasks =====
    clearBtn.addEventListener("click", () => {
      taskList.innerHTML = ""; // removes all li
    });

    // ===== Add Task with "Enter" Key =====
    taskInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        addBtn.click(); // Trigger Add button
      }
    
});




