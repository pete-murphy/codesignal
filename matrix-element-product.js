const transpose = xss => xss[0].map((_, i) => xss.map(ys => ys[i]))

const takeWhile = pred => ([x, ...xs], acc = []) =>
  x == undefined ? acc : pred(x) ? takeWhile(pred)(xs, [...acc, x]) : acc

const flatten = xss => xss.reduce((acc, xs) => [...acc, ...xs], [])

function matrixElementsSum(matrix) {
  return flatten(
    transpose(matrix).map(xs => takeWhile(x => x !== 0)(xs))
  ).reduce((acc, x) => acc + x, 0)
}

const matrix = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]

flatten(transpose(matrix).map(xs => takeWhile(x => x !== 0)(xs))).reduce(
  (acc, x) => acc + x
) //?

const matrix1 = [[1, 1, 1, 0], [0, 5, 0, 1], [2, 1, 3, 10]]

transpose(matrix1) //?

matrixElementsSum(matrix1) //?

matrix2 = [[0]]
matrixElementsSum(matrix2) //?
