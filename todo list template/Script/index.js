document.querySelector("#form").addEventListener("submit", formSubmit);
var todoArr = JSON.parse(localStorage.getItem("todoList")) || [];

// or operator

function formSubmit(event) {
  event.preventDefault();
  var name = document.querySelector("#name").value;
  var qty = document.querySelector("#qty").value;
  //console.log(first)
  var priority = document.querySelector("#priority").value;

  var todoObj = {
    todoName: name,
    todoQty: qty,
    todoPrio: priority,
  };

  todoArr.push(todoObj);

  console.log(todoArr);
  localStorage.setItem("todoList", JSON.stringify(todoArr));
}

// // or statement - it will check only for one condition
// console.log(false || true);

// console.log(1 || 0);

// console.log(0 || 1);

// console.log(1 || null);

// console.log(null || 1);

// console.log(0 || 0);

// console.log(JSON.parse(localStorage.getItem("axshbdsjhbjsdb")) || []);

// console.log(5 > 8 || 5 > 9);
// console.log(false || false);

// var a = "strimg"

// var a = 12
// console.log(a)
