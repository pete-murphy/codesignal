const replicate = n => x => Array(n).fill(x)

function phoneCall(min1, min2_10, min11, s) {
  const go = (min, s) => {
    const currCharge = min == 0 ? min1 : min < 10 ? min2_10 : min11
    return s - currCharge >= 0 ? go(min + 1, s - currCharge) : min
  }
  return go(0, s)
}

phoneCall(3, 1, 2, 20) //?
phoneCall(2, 2, 1, 2) //?
phoneCall(1, 2, 1, 6) //?
