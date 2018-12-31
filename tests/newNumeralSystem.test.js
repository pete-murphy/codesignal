const newNumeralSystem = require("../core/newNumeralSystem")
const test = require("tape")

const num0 = "G"
const exp0 = ["A + G", "B + F", "C + E", "D + D"]

const num1 = "A"
const exp1 = ["A + A"]

const num2 = "D"
const exp2 = ["A + D", "B + C"]

test("newNumeralSystem", t => {
  t.plan(3)
  t.deepEqual(newNumeralSystem(num0), exp0)
  t.deepEqual(newNumeralSystem(num1), exp1)
  t.deepEqual(newNumeralSystem(num2), exp2)
})
