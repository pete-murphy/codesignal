// const range = (a, b, acc = []) => (a <= b ? range(a + 1, b, [...acc, a]) : acc)

// const alpha = range(97, 122).map(x => String.fromCharCode(x)) //?

// const firstNotRepeatingCharacter = s => {
//   const go = (xs, unSeen = new Set(alpha), firstSeen = new Set([])) => {
//     const x = xs.pop()
//     const uss = unSeen.size
//     const fss = firstSeen.size
//     return uss === 0
//       ? "_"
//       : uss === 1 && fss === 1
//         ? (y => (xs.includes(y) || x === y ? "_" : y))(
//             firstSeen.keys().next().value
//           )
//         : x === undefined
//           ? fss
//             ? firstSeen.keys().next().value
//             : "_"
//           : firstSeen.has(x)
//             ? firstSeen.delete(x) &&
//               unSeen.delete(x) &&
//               go(xs, unSeen, firstSeen)
//             : unSeen.has(x)
//               ? firstSeen.add(x) && go(xs, unSeen, firstSeen)
//               : go(xs, unSeen, firstSeen)
//   }
//   return go([...s].reverse())
// }

const firstNotRepeatingCharacter = s => {
  const chars = [...s].reduce(
    (acc, c) => ({ ...acc, [c]: (acc[c] || 0) + 1 }),
    {}
  )
  return Object.keys(chars).find(k => chars[k] == 1) || "_"
}

firstNotRepeatingCharacter("abcde") //?
firstNotRepeatingCharacter(
  "aaaaaaabcdefghiklmnopqrstuvwxyzcdefghiklmnopqrstuvwxyzb"
) //?
firstNotRepeatingCharacter(
  "aaaaaaabcdefghiklmnopqrsjjtuvwxyzcdefghiklmnopqrstuvwxyzb"
) //?

//?
// const alpha =

// firstNotRepeatingCharacter("abcdefghijklmnopqrstuvxyzabcdefghijklmnopqrstuvxy") //?

// const matchValOr = (val, def) => entries => {
//   const go = () => {
//     const next = entries.next()
//     if (next.done) return def
//     const [thisKey, thisVal] = next.value
//     return thisVal === val ? thisKey : go()
//   }
//   return go()
// }
// const firstNotRepeatingCharacter = s => {
//   const go = (xs, acc = new Map([])) =>{
//     const x = xs.shift()
//     return x === undefined
//       ? matchValOr(true, "_")(acc.entries())
//       : acc.has(x)
//         ? acc.set(x, false) && go(xs, acc)
//         : acc.set(x, true) && go(xs, acc)}
//   return go([...s])
// }
// const matchValOr = (val, def) => entries => {
//   const go = () => {
//     const next = entries.next()
//     if (next.done) return def
//     const [thisKey, thisVal] = next.value
//     return thisVal === val ? thisKey : go()
//   }
//   return go()
// }
// const firstNotRepeatingCharacter = s => {
//   const go = (xs, acc = new Map([])) => {
//     const x = xs.shift()
//     return acc.size === 26
//       ? "_"
//       : x === undefined
//         ? matchValOr(true, "_")(acc.entries())
//         : acc.has(x)
//           ? acc.set(x, false) && go(xs, acc)
//           : acc.set(x, true) && go(xs, acc)
//   }
//   return go([...s])
// }

// firstNotRepeatingCharacter("abcdabcd") //?
// firstNotRepeatingCharacter("aisbbvdda") //?
// const m = new Map([])
// m.set("a", 2)
// m.set("b", 4)
// m.set("c", 1)

// const xs = [1,2,3,4]
// xs.shift()//?
// xs //?

// let x = { a: 4 }
// x.hasOwnProperty("b") //?
