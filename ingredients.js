var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var number = 0;

while (number < ingredients.length) {
  console.log(ingredients[number]);
  number++;
}
// Write a for loop that prints out the contents of ingredients:
for (var i=0; i<ingredients.length; i++) {
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var h=ingredients.length-1; h>=0; h--) {
  console.log(ingredients[h]);
}