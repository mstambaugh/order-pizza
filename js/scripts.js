// Business End
function Order() {
  this.OrderItem = []

}

Order.prototype.addOrderItem = function(order)
  this.OrderItem.push(order)

function Item() {
  this.customer = "name"
  this.expensivetopping = [],
  this.cheaptopping = []
  // this.sauce = ()
  // this.crust = gluten-free, thin, thick
}


// Front End
$(document).ready(function(){
  $("#order").submit(function(event) {
    event.preventDefault();
    var customer = $("#customer-name").val();


  });
});

// check boxes for 2 topping types, drop boxes for sauce and crust
// username
