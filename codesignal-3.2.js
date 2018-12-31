const eqArray = (xs, ys) =>
  xs.length === ys.length && xs.reduce((acc, x, i) => x === ys[i] && acc, true)

// const isIncreasing = xs => eqArray(xs, [...new Set(xs)].sort((a, b) => a - b))

const isIncreasing = xs =>
  xs.reduce((acc, x, i) => (i > 0 ? acc && x > xs[i - 1] : true), true)

const dropAtIndex = ix => xs => xs.filter((_, i) => i !== ix)

const tail = ([_, ...xs]) => xs

function almostIncreasingSequence(sequence) {
  const ix = tail(sequence).findIndex((x, i) => x <= sequence[i])
  return (
    isIncreasing(dropAtIndex(ix)(sequence)) ||
    isIncreasing(dropAtIndex(ix + 1)(sequence))
  )
}

almostIncreasingSequence([41, -17, -5, 1, 2, 3, 12, 43, 45]) //?

almostIncreasingSequence([1, 2, 3, 4, 3, 6]) //?
almostIncreasingSequence([1]) //?
almostIncreasingSequence([]) //?

const a = [7, 1, 3, 4]
const b = [7, 1, 3, 4]
const c = [1, 2, 3, 4]

eqArray(a, b) //?
eqArray(a, c) //?

isIncreasing(a) //?
isIncreasing(c) //?
isIncreasing([1]) //?

dropAtIndex(-1)(a) //?
dropAtIndex(0)(a) //?
dropAtIndex(1)(a) //?

tail(a) //?
