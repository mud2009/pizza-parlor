// Business logic
function PizzaOrder() {
  this.pizzas = {};
  this.currentId = 0;
}

function Pizza(toppings, size, notes) {
  this.toppings = toppings;
  this.size = size;
  this.notes = notes;
}

PizzaOrder.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
}

PizzaOrder.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

PizzaOrder.prototype.findPizza = function(id) {
  if (this.pizzas[id] != undefined) {
    return this.pizzas[id];
  }
  return false;
}

// UI logic
let myPizzaOrder = new PizzaOrder();

function displayPizzaCart(orderToDisplay){
  let pizzaList = $("ul#pizza-cart-list");
  let htmlForPizzaList = "";
  Object.keys(orderToDisplay.pizzas).forEach(function(key){
    const pizza = orderToDisplay.find
  })
}

$(document).ready(function(){
  $("#pizza-form").submit(function(event){
    event.preventDefault();
    let toppingsInput = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      toppingsInput.push($(this).val());
    });
    let sizeInput = $("#size").val();
    let notesInput = $("#notes").val();

    let pizza1 = new Pizza(toppingsInput, sizeInput, notesInput);
    myPizzaOrder.addPizza(pizza1);
  })
})