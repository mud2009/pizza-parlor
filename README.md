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

This site allows users to create a pizza order based on their preferred toppings, size and any special instructions. The site then calculates a price per pizza based on these attributes, and finally provides an order total if the user wants to order multiple pizzas. :grin:

## Link to site

This site is accessible [here](https://mud2009.github.io/pizza-parlor/).

## Setup

* Clone this repository to your desktop.
* Navigate to the top level of the directory.
* Open pizza-parlor/index.html in your browser.

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

- Test: "It should return false if the ID isn't found."  
  Code:  
  pizzaOrder.findPizza(100);  
  Expected Output: false  

### Describe: PizzaOrder.prototype.getTotalPrice()

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

- Test: "If the Pizza has toppings, the function will add 1.50 for every topping added"  
  Code:  
  const myPizza.toppings(["Extra Cheese"]);  
  Expected Output: myPizza.price = +1.50  

- Test: "If the Pizza is an Extra Large, the function will add 20"  
  Code:  
  const myPizza.size(["Extra Large"]);  
  Expected Output: myPizza.price = + 20

- Test: "If the Pizza is an Large, the function will add 16"  
  Code:  
  const myPizza.size(["Large"]);  
  Expected Output: myPizza.price = + 16

- Test: "If the Pizza is an Medium, the function will add 14"  
  Code:  
  const myPizza.size(["Medium"]);  
  Expected Output: myPizza.price = + 14

- Test: "If the Pizza is not any of the above sizes, the function will add 12"  
  Code:  
  const myPizza.size(["Small"]);  
  Expected Output: myPizza.price = + 12


## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2022 Will Greenberg