
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}

function takeOrder(order, deliveryOrders){
  if(deliveryOrders.length === 3){
    return
  } else {
  deliveryOrders = deliveryOrders.push(order)
  return deliveryOrders
  }
}

function refundOrder(orderNum, deliveryOrders) {
  for(i = 0; i < deliveryOrders.length; i++){
    if(deliveryOrders[i].orderNumber === orderNum){
    deliveryOrders.splice(i , 1)
    }
  }
  return deliveryOrders
}

function listItems(deliveryOrders){
  var listedItems = []
  for(i = 0; i < deliveryOrders.length; i++){
    listedItems.push(deliveryOrders[i].item)
  }
  return `${listedItems[0]}, ${listedItems[1]}, ${listedItems[2]}`
}

function searchOrder(deliveryOrders, foodType){
  var foodOrders = []
  for(i = 0; i < deliveryOrders.length; i++){
    foodOrders.push(deliveryOrders[i].item)
    }
    return foodOrders.includes(foodType)
}
