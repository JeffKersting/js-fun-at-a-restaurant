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

function formatPrice(initialPrice) {
  initialPrice = `$${initialPrice}`
  return initialPrice
}

function decreasePrice(priceToDecrease) {
  decreasedPrice = priceToDecrease * .9
  return decreasedPrice
}

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
  return recipe
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
