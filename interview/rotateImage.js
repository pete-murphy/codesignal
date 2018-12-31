const rotateImage = a =>
  a.reduce(
    (accs, xs) => accs.map((acc, i) => [xs[i], ...acc]),
    Array(a.length).fill([])
  )

module.exports = rotateImage
