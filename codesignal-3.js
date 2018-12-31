const eqArray = (xs, ys) =>
  xs.length === ys.length && xs.reduce((acc, x, i) => x == ys[i] && acc, true)

const isIncreasing = xs => eqArray(xs, [...new Set(xs)].sort((a, b) => a - b))

const dropAtIndex = ix => xs => [...xs.slice(0, ix), ...xs.slice(ix + 1)]

function almostIncreasingSequence(sequence) {
  return sequence.reduce(
    (acc, _, i) => acc || isIncreasing(dropAtIndex(i)(sequence)),
    false
  )
}

almostIncreasingSequence([123, -17, -5, 1, 2, 3, 12, 43, 45]) //?
