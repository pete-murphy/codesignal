const sum = xs => xs.reduce((acc, x) => acc + x, 0)

function isLucky(n) {
  const nums = [...String(n)].map(Number)
  const ln = nums.length / 2
  return sum(nums.slice(0, ln)) === sum(nums.slice(ln))
}

isLucky(122302) //?
