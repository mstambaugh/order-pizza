// Business Logic
// function Cart(toppings, crust, sauce, size, total, name) {
//   this.toppings = toppings,
//   this.crust = crust,
//   this.sauce = sauce
//   this.size = size,
//   this.total = total,
//   this.customer = name
// }
//
// Cart.prototype.addtoppings = function(toppings) {
//   this.topping.push(toppings)
// }
// Cart.prototype.addcrust = function(crust) {
//   this.crust.push(crust)
// }
// Cart.prototype.addsauce = function(sauce) {
//   this.sauce.push(sauce)
// }
// Cart.prototype.total = function(total) {
//   this.OrderPrice.push(total)

// Cart.prototype.order = function() {
//   return "You are ordering a " + this.size + " pizza with " + this.crust + " crust, " + this.sauce + " sauce, and " + this.toppings " . Your total for pickup will be " + this.total + " .";
// }


// Cart.prototype.deleteOrderItem = function(item) {
//   for (var i = 0; i < this.orderItems.length; i++) {
  //   if (this.orderItems[i]) {
  //     if (this.orderItems[i].id == id) {
  //       delete this.OrderItem[i];
  //       return true;
  //     }
  //   }
  // };
  // return false;



// function Item(expensivetopping, cheaptopping, sauce, crust) {
//   this.expensivetopping = expensivetopping,
//   this.cheaptopping = cheaptopping,
//   this.sauce = sauce,
//   this.crust = crust
// }

// Cart.prototype.removeOrderItem = function(remove)
//   this.Item
//
// Item.prototype.addOrderItem = function() {
//   var ordertotal = 0;
//   this.expensivetopping.forEach(function(val) {
//     order = expensivetopping + val;


// Front End Logic
// var cart = new Cart();
$(document).ready(function() {
  $("#pickup").submit(function(event) {
    event.preventDefault();
    var customerName = $("#customerName").val();
    console.log(customerName)
    var customerNumber = $("#customerPhoneNumber").val();
    // event.preventDefault();
    // console.log(customerPhoneNumber);
    // var size = ParseInt("#size");
    // var crust = ("");
    // var sauce = ("");

  //
  //   $("form#some-form").submit(function(event) {
  // var someInput = $("input#some-input").val();


    // var total = document.getElementsByIdName('protein');
  });
});

// check boxes for 2 topping types, drop boxes for sauce and crust
// username
