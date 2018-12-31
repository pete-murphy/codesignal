function allLongestStrings(inputArray) {
  const maxLen = Math.max(...inputArray.map(x => x.length))
  return inputArray.filter(x => x.length === maxLen)
}

inputArray = ["aba", "aa", "ad", "vcd", "aba"]

allLongestStrings(inputArray) //?
