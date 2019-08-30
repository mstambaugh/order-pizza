// Business End
function Cart() {
  this.OrderItem = [],
  this.OrderItemPrice = [],

}

Cart.prototype.addOrderItem = function(item) {
  this.OrderItem.push(item)
}


function Item() {
  this.customer = "name"
  this.expensivetopping = [],
  this.cheaptopping = [],
  this.sauce = (""),
  this.crust = (),
}

Item.prototype.removeOrderItem = function(remove)
  this.Item

Item.prototype.addToCart = function() {
  var ordertotal = 0;
  this.expensivetopping.forEach(function(val) {
    order = expensivetopping + val;
  });
  this.totalscore += turnpoints;
  player1.turn = true
  player2.turn = true
  this.turn = false
  this.turnscore = [];
  if (this.totalscore >= 100) {
    game.endGame();
  }
}
// Front End
$(document).ready(function() {
  $("#order").submit(function(event) {
    event.preventDefault();
    var customer = $("#customer-name").val();


  });
});

// check boxes for 2 topping types, drop boxes for sauce and crust
// username
