// Business Logic
function Pizza(size, type, cost) {
  this.size = size;
  this.type = type;
  this.cost = cost
}
Pizza.prototype.pizzaSizer = function(size) {
  this.size = size;
}
Pizza.prototype.pizzaTyper = function(type) {
  this.type = type;
}

Pizza.prototype.calculateCost = function() {
    this.cost = this.size + this.type;

}

  // Front End Logic
  var pizza;
  $(document).ready(function() {
    $("#pickup").submit(function(event) {
      event.preventDefault();
      pizza = new Pizza(pizzaSize, pizzaType)
      var customerName = $("#customerName").val();
      var customerNumber = $("#customerPhoneNumber").val();
      var pizzaSize = parseInt($("#sizeChooser").val());
      var pizzaType = parseInt($("#typeChooser").val());
      // var crust = $("#crust").val();
      pizza.pizzaSizer(pizzaSize);
      pizza.pizzaTyper(pizzaType);
      pizza.calculateCost();
      var total = pizza.cost;
      $("#total").text(total);
      });
  });



    // var size = parseInt($("#size").val());
    // var crust = ("");
    // var sauce = ("");
