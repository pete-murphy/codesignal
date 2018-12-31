// map :: (a -> b) -> [a] -> [b]
const map = f => xs => xs.map(f)

// concatMap :: (a -> [b]) -> [a] -> [b]
const concatMap = f => ([x, ...xs], acc = []) =>
  x === undefined ? acc : concatMap(f)(xs, [...acc, ...f(x)])

// sequence :: [[a]] -> [[a]]
const sequence = ([xs, ...xss]) =>
  xs === undefined
    ? [[]]
    : concatMap(x => map(xs => [x, ...xs])(sequence(xss)))(xs)

const ixs = sequence([[0, 3, 6], [0, 3, 6]]) //?

const toSubgrids = g =>
  ixs.map(([x, y]) => [
    ...g[x].slice(y, y + 3),
    ...g[x + 1].slice(y, y + 3),
    ...g[x + 2].slice(y, y + 3)
  ])

const transpose = g =>
  g.reduce(
    (accs, xs) => accs.map((acc, i) => [...acc, xs[i]]),
    Array(g[0].length).fill([])
  )

const allUniq = xs => xs.length === new Set(xs).size

const toNums = xs => xs.map(Number).filter(x => !isNaN(x))

function sudoku2(grid) {
  const nums = grid.map(toNums)
  const numsT = transpose(grid).map(toNums)
  const numsSG = toSubgrids(grid).map(toNums)
  return [nums, numsT, numsSG].every(ns => ns.every(allUniq))
}

module.exports = sudoku2
