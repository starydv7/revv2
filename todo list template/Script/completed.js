var completed = JSON.parse(localStorage.getItem("completedTods"));
console.log(completed);

completed.map(function (elem, index) {
  var row = document.createElement("tr");

  var col1 = document.createElement("td");
  col1.innerText = elem.todoName;

  var col2 = document.createElement("td");
  col2.innerText = elem.todoQty;

  var col3 = document.createElement("td");
  col3.innerText = elem.todoPrio;

  row.append(col1, col2, col3);

  document.querySelector("#body").append(row);
});

var totalQty = completed.reduce(function (acc, elem) {
  return acc + Number(elem.todoQty);
}, 0);

console.log(totalQty);

