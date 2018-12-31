const shift = ([x, ...xs]) => [...xs, x]

const range = (a, b, acc = []) => (a <= b ? range(a + 1, b, [...acc, a]) : acc)

function metroCard(lastNumberOfDays) {
  const days = range(0, 11).map(
    m => new Date(0, m + 1, 0).toDateString().split(" ")[2]
  )
  const lut = days.reduce(
    (acc, x, i) => ({
      ...acc,
      [x]: (acc[x] || new Set([])).add(shift(days)[i])
    }),
    {}
  )
  return [...lut[lastNumberOfDays]].map(Number) //?
}

metroCard(31)
