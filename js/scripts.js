// Business End
function Order() {
  this.OrderItem = []
  this.customer = "name"
}

Order.prototype.addOrderItem = function(order)
  this.OrderItem.push(order)

function Item() {
  this.expensivetopping = [],
  this.cheaptopping = []
  this.sauce = ()
}


// Front End
$(document).ready(function(){
  $("#order").submit(function(event) {
    event.preventDefault();
  });
});
