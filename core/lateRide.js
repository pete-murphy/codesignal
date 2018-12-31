function lateRide(n) {
  return [...String(Math.floor(n / 60)), ...String(n % 60)]
    .map(Number)
    .reduce((acc, x) => acc + x)
}
