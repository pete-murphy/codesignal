const test = require("tape")
const reverseParentheses = require("../reverseParentheses")

// test("reverseParentheses", t => {
//   t.plan(4)
//   t.equal(reverseParentheses("a(bcdefghijkl(mno)p)q"), "apmnolkjihgfedcbq")
//   t.equal(reverseParentheses("a(bc)de"), "acbde")
//   t.equal(reverseParentheses("a(bc)de(abc)"), "acbdecba")
//   t.equal(
//     reverseParentheses("The ((quick (brown) (fox) jumps over the lazy) dog)"),
//     "The god quick nworb xof jumps over the lazy"
//   )
// })
