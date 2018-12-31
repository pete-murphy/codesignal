const removeFst = y => ([x, ...xs], acc = []) =>
  x === undefined
    ? acc
    : x == y
      ? [...acc, ...xs]
      : removeFst(y)(xs, [...acc, x])

function commonCharacterCount(s1, s2) {
  const go = ([x, ...xs], ys, acc = []) =>
    x === undefined
      ? acc
      : ys.includes(x)
        ? go(xs, removeFst(x)(ys), [...acc, x])
        : go(xs, ys, acc)
  return go([...s1], [...s2]).length
}

const s1 = "aabcc"
const s2 = "adcaa"

commonCharacterCount(s1, s2) //?

// const str = [..."aaabc"]
// const strM = str.reduce(
//   (acc, x) => (acc.has(x) ? acc.set(x, acc.get(x) + 1) : acc.set(x, 1)),
//   new Map([])
// )

// const s1 = [..."aaaabc"]

// const s1Map = s1.reduce(
//   (acc, x) => (acc[x] ? { ...acc, [x]: acc[x] + 1 } : { ...acc, [x]: 1 }),
//   {}
// )

// (acc.has(x) ? acc.set(x, acc.get(x) + 1) : acc.set(x, 1)),
