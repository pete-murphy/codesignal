const Iso = (to, from) => ({ to, from })

const numCaps = Iso(n => n.charCodeAt() - 65, c => String.fromCharCode(c + 65))

const range = (a, b, acc = []) => (a <= b ? range(a + 1, b, [...acc, a]) : acc)

const zipWith = f => (xs, ys) =>
  xs.reduce((acc, x, i) => [...acc, f(x, ys[i])], [])

function newNumeralSystem(number) {
  const n = numCaps.to(number)
  const xs = range(0, Math.floor(n / 2))
  const ys = range(Math.floor(n / 2), n)
  return zipWith((x, y) => `${numCaps.from(x)} + ${numCaps.from(y)}`)(xs, ys)
}

// zipWith((x, y) => `${numCaps.from(x)} + ${numCaps.from(y)}`)(
//   [0, 1, 2],
//   [4, 3, 2]
// ) //?

module.exports = newNumeralSystem
