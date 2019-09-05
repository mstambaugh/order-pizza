// Business Logic
function Pizza(toppings, crust, sauce, size) {
  this.size = size;
  this.toppings = toppings;
  this.crust = crust;
  this.sauce = sauce;
  this.size = size;
  this.totalcost = 0
}

Pizza.prototype.calculateCost() = function(totalcost) {
  this.totalcost= this.size + this.toppings;
}











// Front End Logic

$(document).ready(function() {
  $("#pickup").submit(function(event) {
    event.preventDefault();
    var customerName = $("#customerName").val();
    var customerNumber = $("#customerPhoneNumber").val();
    console.log(customerName);
    console.log(customerPhoneNumber);
    var size = ParseInt("#size").val;
    var crust = ("");
    var sauce = ("");


  });
});
