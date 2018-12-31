function arithmeticExpression(a, b, c) {
  return [a - b, a + b, a * b, a / b].some(x => x === c)
}
