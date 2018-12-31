function constructArray(size) {
  const go = (num, acc) =>
    num > size / 2
      ? acc.includes(num)
        ? acc
        : [...acc, num]
      : go(num + 1, [...acc, num, size + 1 - num])
  return go(1, [])
}

constructArray(7) //?
constructArray(2) //?

function periodicSequence(s0, a, b, m) {
  const go = (s, i = 0, lastSeen = new Map([])) => {
    const newS = (a * s + b) % m
    return lastSeen.has(newS)
      ? i - lastSeen.get(newS)
      : go(newS, i + 1, lastSeen.set(newS, i))
  }
  return go(s0)
}

// const m = new Map([])
periodicSequence(11, 2, 6, 12) //?
// m.set()

function addTwoDigits(n) {
  const chars = [...String(n)].map(Number)
  return chars.reduce((acc, x) => acc + x)
}

addTwoDigits(29) //?

function centuryFromYear(year) {
  return Math.round((year - 1) / 100) + 1
}
centuryFromYear(1907) //?

const toLower = str => str.toLowerCase()
// const reverse = str => [...str].reverse().join("")

// function checkPalindrome(inputString) {
//   const [a, b] = [inputString, reverse(inputString)].map(toLower)
//   return a === b
// }

// checkPalindrome("raceca") //?

const tail = ([_, ...xs]) => xs

const reverse = xs => xs.reverse()

const zipWith = f => xs => ys =>
  xs.reduce((acc, x, i) => [...acc, f(x, ys[i])], [])

const product = (a, b) => a * b

function adjacentElementsProduct(xs) {
  const a = tail(xs)
  const b = reverse(tail(reverse(xs)))
  return Math.max(...zipWith(product)(a)(b))
}

adjacentElementsProduct([3, 6, -2, -5, 7, 3]) //?

function shapeArea(n) {
  return n ** 2 + (n - 1) ** 2
}

shapeArea(3) //?

const head = ([x]) => x

const last = xs => head(xs.reverse())

function makeArrayConsecutive2(statues) {
  const [a, b] = [Math.max(...statues), Math.min(...statues)]
  return a - b - statues.length + 1
}

makeArrayConsecutive2([6, 2, 3, 8]) //?
// [1,2,5,6,3,2].sort() //?



