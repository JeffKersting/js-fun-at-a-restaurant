

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
function createRestaurant(name, menus){
  var restaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
  return restaurant
}

function addMenuItem(restaurant, menuItem){

  if(menuItem.type === "breakfast" && restaurant.menus.breakfast.includes(menuItem) === false){
    restaurant.menus.breakfast.push(menuItem)
  } else if(menuItem.type === "lunch" && restaurant.menus.lunch.includes(menuItem) === false){
    restaurant.menus.lunch.push(menuItem)
  } else if(menuItem.type === "dinner" && restaurant.menus.dinner.includes(menuItem) === false){
    restaurant.menus.dinner.push(menuItem)
  } else {
    return
  }
  return restaurant
}

function removeMenuItem(restaurant, foodName, menuType){
    if(menuType === 'breakfast' && restaurant.menus.breakfast[0].name === foodName){
        restaurant.menus.breakfast = []
      }
    else if(menuType === 'lunch' && restaurant.menus.lunch[0].name === foodName){
        restaurant.menus.lunch = []
      }
    else if(menuType === 'dinner' && restaurant.menus.dinner[0].name === foodName){
        restaurant.menus.dinner = []
      }
    else{
      return `Sorry, we don't sell ${foodName}, try adding a new recipe!`
    }
    return `No one is eating our ${foodName} - it has been removed from the ${menuType} menu!`
  }
