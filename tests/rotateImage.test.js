const test = require("tape")
const rotateImage = require("../interview/rotateImage.js")

const a0 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const a0exp = [[7, 4, 1], [8, 5, 2], [9, 6, 3]]

test("rotateImage", t => {
  t.plan(1)
  t.deepEqual(rotateImage(a0), a0exp)
})
