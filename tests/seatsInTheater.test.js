const test = require("tape")
const seatsInTheater = require("../core/seatsInTheater")

test("seatsInTheater", t => {
  t.plan(1)
  t.equal(seatsInTheater(16, 11, 5, 3), 96)
})
