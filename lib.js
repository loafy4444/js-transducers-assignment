
function customer (orders, state) {
  return { orders, state }
}

function order (items, timeStamp) {
  return { items, timeStamp }
}

function item (name, price) {
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

 //  Customer contains an array of orders and their state
 //  The orders array contains an array of items purchased and time of purchase
function grossPerItemInState (state, startTime, endTime, customers) {
  const result = {}
    customers
      .filter(c => c.state === state)
      .reduce((order, customer) => [...customer.orders, ...order ], [])
      .filter(order => order.timeStamp >= startTime && order.timeStamp <= endTime)
      .reduce((item, order) => [...order.items, ...item], [])
      .forEach(item => {
        if (result[item.name] === undefined) { result[item.name] = 0 }
        result[item.name] += item.price
      })

  return result
}

module.exports = {
  customer,
  order,
  item,
  grossPerItemInState
}
