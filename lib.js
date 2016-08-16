

function customer(orders, state) {
  return { orders, state }
}

function order(items, timeStamp) {
  return { items, timeStamp }
}

function item(name, price) {
  return { name, price }
}

function grossPerItemInState(state, startTime, endTime, customers) {
  //TODO: Make this actually calculate values.
  return {
    wizz: 600
    bang: 300
  }
}



module.exports = {
  customer,
  order,
  item,
  grossPerItemInState
}
