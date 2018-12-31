function isIncreasingSequence(sequence) {
  const length = sequence.length - 1
  for (let i = 0; i < length; i++) {
    console.log(length)
    console.log(i)
    console.log(sequence[i])

    console.log(sequence)
    if (sequence[i] >= sequence[i + 1]) {
      console.log(sequence)
      return false
    }
  }
  return true
}

// isIncreasingSequence([1, 2, 10]) //?
// isIncreasingSequence([9, 10, 1]) //?

function almostIncreasingSequence(sequence) {
  const length = sequence.length
  for (let i = 0; i < length; i++) {
    let newSequence = sequence.concat()
    newSequence.splice(i, 1)
    console.log({ newSequence })
    if (isIncreasingSequence(newSequence)) {
      return true
    }
  }
  return false
}

const example = [1, 2, 3, 4, 5]

example.splice(2, 3) //?

example //?

// almostIncreasingSequence([3, 2, 3, 4, 5, 6, 8, 10]) //?
// almostIncreasingSequence([-1, -2, 3, -4]) //?
almostIncreasingSequence([4, 2, 4, 1]) //?
