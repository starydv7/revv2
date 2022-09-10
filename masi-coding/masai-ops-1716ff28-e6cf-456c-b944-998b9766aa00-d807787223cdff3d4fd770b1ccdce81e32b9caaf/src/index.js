function Person(first, last,price, sold=false) {
  this.firstName = first;
  this.lastName = last;
  this.price = price;
  this.sold = sold;
}
const name = new constructor("John", "Doe", 50, "sold")
document.getElementById("demo").innerHTML = "My Name is" + name + " ";