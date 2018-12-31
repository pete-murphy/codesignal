function firstDuplicate(a) {
  const go = (xs, i = 0, seen = new Set([])) => {
    const x = xs.pop()
    return x === undefined
      ? -1
      : seen.has(x)
        ? x
        : seen.add(x) && go(xs, i + 1, seen)
  }
  return go(a.reverse())
}

firstDuplicate([2, 1, 3, 5]) //?
firstDuplicate([2, 1, 3, 5, 3, 2]) //?
firstDuplicate([1, 1, 2, 2, 1]) //?

// ;[2, 1, 3, 5, 3, 2].reduce((acc, x, i) =>
//   (acc.includes(x) ? i : [...acc, x])
// , []) //?
