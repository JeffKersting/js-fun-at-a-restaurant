function nameMenuItem(foodItem) {
  return `Delicious ${foodItem}`
}

function createMenuItem(name,price,type){
  var menuItem = {
    name: name,
    price: price,
    type: type
  }
  return menuItem
}

function addIngredients(ingredient, ingredients){
  if(ingredients.includes(ingredient) == true){
    return ingredients;
  } else {
  ingredients.push(ingredient)
  return ingredients
  }

}

function formatPrice() {
  
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}
