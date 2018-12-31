const findIndices = pred => xs =>
  xs.reduce((acc, x, i) => (pred(x) ? [...acc, i] : acc), [])

const insertAtIndices = y => ([ix, ...ixs], currIx = 0) => (
  [x, ...xs],
  acc = []
) =>
  ix === undefined
    ? x === undefined
      ? acc
      : [...acc, x, ...xs]
    : currIx === ix
      ? insertAtIndices(y)(ixs, currIx + 1)([x, ...xs], [...acc, y])
      : insertAtIndices(y)([ix, ...ixs], currIx + 1)(xs, [...acc, x])

function sortByHeight(a) {
  const ixs = findIndices(x => x === -1)(a)
  return insertAtIndices(-1)(ixs)(a.filter(x => x !== -1).sort((a, b) => a - b))
}

const a = [-1, 150, 190, 170, -1, -1, 160, 180]

const a1 = [-1, -1, -1, -1, -1]

sortByHeight(a) //?
sortByHeight(a1) //?
