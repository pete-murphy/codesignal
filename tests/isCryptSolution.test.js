const isCryptSolution = require("../interview/isCryptSolution")
const test = require("tape")

const crypt0 = ["SEND", "MORE", "MONEY"]
const solution0 = [
  ["O", "0"],
  ["M", "1"],
  ["Y", "2"],
  ["E", "5"],
  ["N", "6"],
  ["D", "7"],
  ["R", "8"],
  ["S", "9"]
]

const crypt1 = ["TEN", "TWO", "ONE"]
const solution1 = [["O", "1"], ["T", "0"], ["W", "9"], ["E", "5"], ["N", "4"]]

test("isCryptSolution", t => {
  t.plan(2)
  t.equal(isCryptSolution(crypt0, solution0), true)
  t.equal(isCryptSolution(crypt1, solution1), false)
})
