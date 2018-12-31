function knapsackLight(value1, weight1, value2, weight2, maxW) {
  return weight1 + weight2 <= maxW
    ? value1 + value2
    : Math.min(weight1, weight2) > maxW
      ? 0
      : weight1 > maxW
        ? value2
        : weight2 > maxW
          ? value1
          : Math.max(value1, value2)
}
