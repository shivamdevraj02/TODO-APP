
const input = document.querySelector("input");
const button = document.querySelector("button");
const todoBox = document.querySelector(".todo-box");


const taskList = document.createElement("ul");
taskList.className = "todo-list";
todoBox.appendChild(taskList);


button.addEventListener("click", () => {
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.className = "task-item";

  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div class="task-actions">
      <button class="complete-btn">✔</button>
      <button class="delete-btn">✖</button>
    </div>
  `;

  taskList.appendChild(li);
  input.value = "";
});


taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("complete-btn")) {
    const task = e.target.closest("li").querySelector(".task-text");
    task.classList.toggle("completed");
  }

  if (e.target.classList.contains("delete-btn")) {
    e.target.closest("li").remove();
  }
});
