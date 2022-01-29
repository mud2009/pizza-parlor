# Pizza Parlor

#### by **Will Greenberg**

#### 

## Technologies Used

* HTML
* CSS
* Bootstrap
* Javascript
* jQuery

## Description


## Link to site

This site is accessible [here](/).

## Setup

* Clone this repository to your desktop.
* Navigate to the top level of the directory.
* Open  in your browser.

## Known bugs

* None so far.

## Specifications:

### Describe: PizzaOrder()

- Test: "It should construct a PizzaOrder object."  
  Code:  
  const pizzaOrder = new PizzaOrder();  
  Expected Output: pizzaOrder {}  

### Describe: PizzaOrder.prototype.addPizza()

- Test: "It should add new pizzas to the nested object pizzas."  
  Code:  
  pizzaOrder.addPizza(newPizza);  
  Expected Output: pizzaOrder.pizzas{newPizza}  

### Describe: PizzaOrder.prototype.assignId()

- Test: "It should assign an ID for objects within PizzaOrder."  
  Code:  
  pizzaOrder.assignId();  
  Expected Output: pizzaOrder{currentId:1}  

### Describe: PizzaOrder.prototype.findPizza()

- Test: "It should find a pizza within the object by its ID."  
  Code:  
  pizzaOrder.findPizza(1);  
  Expected Output: pizzaOrder.pizzaz{id:1}  
  
    ### Describe: Pizza.prototype.getTotalPrice()

- Test: "It should return a price for the order, based on the individual prices of the pizzas in the cart"  
  Code:  
  const myPizzaOrder.getTotalPrice();  
  Expected Output: myPizzaOrder.totalPrice = 30  

### Describe: Pizza()

- Test: "It should return a Pizza object with two properties for toppings and size"  
  Code:  
  const myPizza = new Pizza(["anchovies", "pineapple"], "medium");  
  Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }  

### Describe: Pizza.prototype.getPizzaPrice()

- Test: "It should return a price for a pizza based on the properties of that pizza"  
  Code:  
  const myPizza.getPizzaPrice();  
  Expected Output: myPizza.price = 15  

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2022 Will Greenberg