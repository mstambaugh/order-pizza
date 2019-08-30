// Business End
function Cart() {
  this.OrderItems = [],
  this.OrderPrices = [],
  this.OrderTotal = 0,
  this.customer = "name"
}

Cart.prototype.addOrderItem = function(item) {
  this.OrderItem.push(item)
}

Cart.prototype.addOrderPrice = function(itemprice) {
  this.OrderPrice.push(itemprice)
}

Cart.prototype.deleteOrderItem = function(item) {
  for (var i = 0; i < this.orderItems.length; i++) {
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

Cart.prototype.removeOrderItem = function(remove)
  this.Item

Item.prototype.addOrderItem = function() {
  var ordertotal = 0;
  this.expensivetopping.forEach(function(val) {
    order = expensivetopping + val;
  // });
  // this.totalscore += turnpoints;
  // player1.turn = true
  // player2.turn = true
  // this.turn = false
  // this.turnscore = [];
  // if (this.totalscore >= 100) {
  //   game.endGame();
  }
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
