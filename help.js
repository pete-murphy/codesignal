function firstRecurring(input) {
  const counts = {}
  for (char in input) {
    if (input[char] in counts) {
      return input[char]
    } else {
      counts[input[char]] = 1
    }
  }
}

function almostIncreasingSequence(sequence) {
  for (let i = 0; i < sequence.length; i++) {
    let newSequence1 = sequence.slice(0, sequence.length)
    newSequence1.splice(i, 1)
    let newSequence2 = newSequence1.slice(0, newSequence1.length)
    newSequence1.sort((a, b) => a - b)
    console.log(newSequence1)
    if (
      newSequence2.join("") === newSequence1.join("") &&
      !firstRecurring(newSequence2)
    ) {
      return true
    }
  }
  return false
}

almostIncreasingSequence([1, 2, 3, 4, 5, 8, 6]) //?

// function zigzag(a) {}

// const a = [9, 8, 8, 5, 3, 5, 3, 2, 8, 6]

// const countWhileTrue = arr =>
//   arr.reduce(
//     (acc, x) => {
//       const l = acc.length
//       const lastCount = acc[l - 1]
//       if (x) {
//         return [...acc.slice(0, l), lastCount + 1]
//       } else {
//         return [...acc, 1]
//       }
//     },
//     [0]
//   )

// function zigzag(a) {
//   const l = a.length
//   const bools = a
//     .slice(1, l - 1)
//     .map((e, i) => (e > a[i] && e > a[i + 2]) || (e < a[i] && e < a[i + 2]))
//   // return countWhileTrue(1ools)
//   return Math.max(...countWhileTrue(bools)) + 1
// }

// zigzag(a) //?

// function constructArray(size) {

// }
