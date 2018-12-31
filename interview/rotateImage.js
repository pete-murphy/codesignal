// function rotateImage(a) {

//   return [[7, 4, 1], [8, 5, 2], [9, 6, 3]]

// }

const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const rotateImage = a =>
  a.reduce(
    (accs, xs) => accs.map((acc, i) => [xs[i], ...acc]),
    Array(a.length).fill([])
  )

// const dims = a => [a.length, a[0].length]

// dims(a) //?

module.exports = rotateImage
