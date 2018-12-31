const tennisSet = (...scores) =>
  (scores.some(s => s === 6) && scores.some(s => s < 5)) ||
  (scores.some(s => s >= 5 && s < 7) && scores.some(s => s === 7))
