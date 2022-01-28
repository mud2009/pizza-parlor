// Business logic
function Pizza(toppings, size, notes) {
  this.toppings = toppings;
  this.size = size;
  this.notes = notes;
}

// UI logic
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

  })
})