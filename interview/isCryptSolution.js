const toObj = xs => xs.reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {}) //?

const isValidNum = str => !str.startsWith(0) || str === "0"

function isCryptSolution(crypt, solution) {
  const obj = toObj(solution)
  const crypt_ = crypt.map(str => [...str].map(k => obj[k]).join(""))
  const [x, y, sum] = crypt_.map(Number)
  return crypt_.every(isValidNum) && x + y === sum
}

module.exports = isCryptSolution
