// Business logic
function PizzaOrder() {
  this.pizzas = {};
  this.currentId = 0
  this.totalPrice = 0;
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

PizzaOrder.prototype.getTotalPrice = function(orderToDisplay) {
  Object.keys(orderToDisplay.pizzas).forEach(function(key) {
    const pizza = orderToDisplay.findPizza(key);
    orderToDisplay.totalPrice += pizza.price;
  })
}

function Pizza(toppings, size, notes) {
  this.toppings = toppings;
  this.size = size;
  this.notes = notes;
  this.price = 0;
}

Pizza.prototype.getPizzaPrice = function(orderToDisplay) { 
  Object.keys(orderToDisplay.pizzas).forEach(function(key){
    const pizza = orderToDisplay.findPizza(key);
    pizza.price = 0;
    if (pizza.toppings.length > 0) {
      pizza.price += (pizza.toppings.length * 1.50);
    }
    if (pizza.size === "Extra Large") {
      pizza.price += 20;
    } else if (pizza.size === "Large") {
      pizza.price += 16;
    } else if (pizza.size === "Medium") {
      pizza.price += 14;
    } else {
      pizza.price += 12;
    };
  });
};


// UI logic
let myPizzaOrder = new PizzaOrder();

function displayPizzaCart(orderToDisplay){
  let pizzaList = $("ul#pizza-cart-list");
  let htmlForPizzaList = "";
  Object.keys(orderToDisplay.pizzas).forEach(function(key){
    const pizza = orderToDisplay.findPizza(key);
    htmlForPizzaList += "<li id='" + pizza.id + "'>";
    if (pizza.toppings.length === 0) {
      htmlForPizzaList += "Plain, " + pizza.size
      if (pizza.notes != ""){
        htmlForPizzaList += ", " + pizza.notes + ", $" + pizza.price + "</li>";
      } else {
        htmlForPizzaList += ", $" + pizza.price + "</li>";
      }
    } else {
      htmlForPizzaList += pizza.toppings + ", " + pizza.size;
      if (pizza.notes != ""){
        htmlForPizzaList += ", " + pizza.notes + ", $" + pizza.price + "</li>";
      } else {
      htmlForPizzaList += ", $" + pizza.price + "</li>";
      }
    };
  });
  pizzaList.html(htmlForPizzaList)
};

function displayTotalPrice(orderToDisplay) {
  $("#total-price").html("$" + orderToDisplay.totalPrice)
}

function attachContactListeners() {
  $("#place-order").on("click", function() {
    myPizzaOrder.totalPrice = 0;
    myPizzaOrder.getTotalPrice(myPizzaOrder)
    displayTotalPrice(myPizzaOrder);
    $("#pizza-price").show();
  })
}

$(document).ready(function(){
  attachContactListeners();
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

    pizza1.getPizzaPrice(myPizzaOrder)
    displayPizzaCart(myPizzaOrder);
    $("#pizza-form")[0].reset();
    $("#pizza-cart").show();
  })
})