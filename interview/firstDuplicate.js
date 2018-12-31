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
