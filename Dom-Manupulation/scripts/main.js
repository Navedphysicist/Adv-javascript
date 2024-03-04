// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

let urlTodosBase = `${baseServerURL}/todos/`;
let mainSection = document.getElementById("data-list-wrapper");
let getTodoButton = document.getElementById("fetch-todos");
let sortLowToHigh = document.getElementById("sort-low-to-high");
let sortHighToLow = document.getElementById("sort-high-to-low");
let filterCompleted = document.getElementById("filter-completed");
let filterPending = document.getElementById("filter-pending");
let filterByCategoryWrapper = document.getElementById(
  "filter-by-categories-wrapper"
);
let todoItems = [];

getTodoButton.addEventListener("click", handleFetch);
sortLowToHigh.addEventListener("click", handleSortLowToHigh);
sortHighToLow.addEventListener("click", handleSortHighToLow);
filterCompleted.addEventListener("click", handleFilterCompleted);
filterPending.addEventListener("click", handleFilterPending);



const checkboxes = document.getElementsByClassName("todo-item-checkbox");
console.log(checkboxes, "CHECKBOXes");
async function handleFetch() {
  let streamData = await fetch(urlTodosBase);
  let data = await streamData.json();
  display(data);
  setFilters();

  function updateData(value) {
    let newData = data.filter((el) => {
      if (el.category == value) {
        return el;
      }
    });
    display(newData);
  }

  function setFilters() {
    filterByCategoryWrapper.innerHTML = null;
    let workButton = document.createElement("button");
    workButton.innerHTML = "WORK";
    let choresButton = document.createElement("button");
    choresButton.innerHTML = "CHORES";
    let familyButton = document.createElement("button");
    familyButton.innerHTML = "FAMILY";
    let LearningButton = document.createElement("button");
    LearningButton.innerHTML = "LEARNING";
    let resetButton = document.createElement("button");
    resetButton.innerHTML = "RESET";
    filterByCategoryWrapper.append(
      workButton,
      choresButton,
      familyButton,
      LearningButton,
      resetButton
    );

    workButton.addEventListener("click", () => updateData("Work"));
    choresButton.addEventListener("click", () => updateData("Chores"));
    familyButton.addEventListener("click", () => updateData("Family"));
    LearningButton.addEventListener("click", () => updateData("Learning"));
    resetButton.addEventListener("click", () => updateData());
  }

  
}

async function handleSortLowToHigh() {
  let streamData = await fetch(`${urlTodosBase}?_sort=title&_order=asc`);
  let data = await streamData.json();

  let todoDiv = document.createElement("div");
  todoDiv.id = "todo-list-wrapper";
  todoDiv.className = "todo-list-wrapper";
  display(data);
}

async function handleSortHighToLow() {
  let streamData = await fetch(`${urlTodosBase}?_sort=title&_order=desc`);
  let data = await streamData.json();

  let todoDiv = document.createElement("div");
  todoDiv.id = "todo-list-wrapper";
  todoDiv.className = "todo-list-wrapper";
  display(data);
}

async function handleFilterCompleted() {
  const checkboxes = document.getElementsByClassName("todo-item-checkbox");
  console.log(checkboxes, "CHECKBOXes");
  let streamData = await fetch(`${urlTodosBase}?completed=true`);
  let data = await streamData.json();

  let todoDiv = document.createElement("div");
  todoDiv.id = "todo-list-wrapper";
  todoDiv.className = "todo-list-wrapper";
  display(data);
}

async function handleFilterPending() {
  const checkboxes = document.getElementsByClassName("todo-item-checkbox");
  console.log(checkboxes, "CHECKBOXes");
  let streamData = await fetch(`${urlTodosBase}?completed=false`);
  let data = await streamData.json();

  let todoDiv = document.createElement("div");
  todoDiv.id = "todo-list-wrapper";
  todoDiv.className = "todo-list-wrapper";
  display(data);
}

function display(data) {
  console.log(data,"DDDDD")
  console.log("hI")
  mainSection.innerHTML = null;
  let todoDiv = document.createElement("div");
  todoDiv.id = "todo-list-wrapper";
  todoDiv.className = "todo-list-wrapper";
  data.map((el, ind) => {
    let label = document.createElement("label");
    label.className = "todo-item-label";
    let inputTag = document.createElement("input");

    inputTag.className = "todo-item-checkbox";
    inputTag.type = "checkbox";
    if (el.completed) {
      inputTag.checked = true;
    }
    label.append(inputTag, `${el.title}`);
    todoDiv.append(label);

    inputTag.addEventListener("change", async function (event) {
      const newData = {
        completed: event.target.checked,
      };
      const requestOptions = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      };
      let streamData = await fetch(`${urlTodosBase}${el.id}`, requestOptions);
      let data = await streamData.json();
      console.log(data, "DATA");
    });
  });
  mainSection.append(todoDiv);
}

// for (let checkbox of checkboxes) {
//   checkbox.addEventListener("change", function (event) {
//     if (event.target.checked) {
//       console.log(event.target, "EVENT_TARGET")
//       const newData = {
//         key1: "value1",
//         key2: "value2",
//       };
//     }
//   }
//   )
// }
