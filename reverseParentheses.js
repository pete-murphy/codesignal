const reverse = xs => xs.reverse()
const flatten = xs =>
  xs.reduce(
    (acc, x) => (Array.isArray(x) ? [...acc, ...flatten(x)] : [...acc, x])
  )

function reverseParentheses(s) {
  const parse_ = s =>
    s
      .replace(/(\w|\))(?=(\w| |\())/g, l => l + ",")
      .replace(/\( ( ?=\( )/g, l => l + ",")
      .replace(/\(/g, "[")
      .replace(/\)/g, "]")
      .replace(/.*/, l => "[" + l + "]")
      .replace(/\w/g, l => `"${l}"`)
  parse_(s) //?
  const parse = s => JSON.parse(parse_(s))
  const go = xs =>
    xs.reduce(
      (acc, x) => (Array.isArray(x) ? [...acc, ...go(reverse(x))] : [...acc, x])
    )
  return /(\(|\))/.test(s)
    ? flatten(go(parse(s))).join("")
    : "Where are the parentheses?"
}

module.exports = reverseParentheses
