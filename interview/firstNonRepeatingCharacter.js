const firstNotRepeatingCharacter = s => {
  const chars = [...s].reduce(
    (acc, c) => ({ ...acc, [c]: (acc[c] || 0) + 1 }),
    {}
  )
  return Object.keys(chars).find(k => chars[k] == 1) || "_"
}

firstNotRepeatingCharacter("abcde")
firstNotRepeatingCharacter(
  "aaaaaaabcdefghiklmnopqrstuvwxyzcdefghiklmnopqrstuvwxyzb"
)
firstNotRepeatingCharacter(
  "aaaaaaabcdefghiklmnopqrsjjtuvwxyzcdefghiklmnopqrstuvwxyzb"
)
