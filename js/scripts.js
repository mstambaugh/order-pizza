// Business End
function Cart(toppings, crust, sauce, size, total, name) {
  this.toppings = toppings,
  this.crust = crust,
  this.sauce = sauce
  this.size = size,
  this.total = total,
  this.customer = name,
}

Cart.prototype.addtopping = function(toppings) {
  this.topping.push(item)
}

Cart.prototype.total = function(total) {
  this.OrderPrice.push(itemprice)
}
Cart.prototype.order = function() {
  return "You are ordering a " + this.size + " pizza with " + this.crust + " crust, " + this.sauce + " sauce, and " + this.toppings " . Your total for pickup will be " + this.total + " .";
}


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

}
// Front End
var cart = new Cart();
$(document).ready(function() {
  $("#order").submit(function(event) {
    event.preventDefault();
    var customer = $("#customer-name").val();



  });
});

// check boxes for 2 topping types, drop boxes for sauce and crust
// username
