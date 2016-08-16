

function customer(orders, state) {
  return { orders, state }
}

function order(items, timeStamp) {
  return { items, timeStamp }
}

function item(name, price) {
  return { name, price }
}

/*
 *
 * @param state String name of a state.
 * @param startTime a Number representing a starting time.
 * @param endTime a Number representing an ending time.
 * @param customers an array of Customer objects.
 * @returns An Object of item names mapped to the total sales of that item
 *  in the given State and between the given startTime and endTime.   
 */
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
