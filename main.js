const {
  customer,
  order,
  item,
  grossPerItemInState
} = require("./lib")



const gadget = item("gadget", 5)
const doodad = item("doodad", 10)
const thingamagij = item("thingamagij", 100)
const whatchacallit = item("whatchacallit", 500)

const timeOut = 200
const timeIn = 500

const startTime = 300
const endTime = 600

const stateIn = "TN"
const stateOut = "AZ"

const customers = [
  customer(
    [
      order([gadget, thingamagij], timeIn),
      order([whatchacallit], timeOut),
      order([doodad, whatchacallit], timeIn)
    ],
    stateIn
  ),
  customer(
    [
      order([thingamagij, thingamagij], timeIn),
      order([doodad, doodad, doodad, doodad], timeIn),
      order([whatchacallit], timeOut)
    ], stateOut
  ),
  customer(
    [
      order([doodad, thingamagij, doodad, doodad], timeIn),
      order([doodad, thingamagij], timeIn),
      order([whatchacallit, doodad], timeOut)
    ], stateIn
  ),
  customer(
    [
      order([doodad, thingamagij, doodad, gadget], timeIn),
      order([doodad, thingamagij], timeIn),
      order([whatchacallit, doodad], timeIn)
    ], stateIn
  ),
  customer(
    [
      order([gadget, gadget, gadget], timeOut),
      order([doodad, gadget, gadget, gadget], timeIn),
      order([gadget, doodad], timeOut)
    ], stateOut
  ),
  customer(
    [
      order([doodad, thingamagij, doodad, doodad], timeIn),
      order([doodad, gadget], timeIn),
      order([whatchacallit, doodad], timeOut)
    ], stateIn
  )
]


const result = grossPerItemInState(stateIn, startTime, endTime, customers)

console.log(result)
