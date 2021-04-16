function censorList(list, string) {
  const reg = RegExp('\\b'+list.join`\\b|\\b`+'\\b','gi')

  return string.replace(reg, m=> m[0] + '#'.repeat(m.length / 2) + m.charAt(m.length - 1));
};


// 1. \b matches the empty string at the beginning or end of a word
// 1. g = global, match all instances of the pattern in a string, not just one
// 1. i = case-insensitive (so, for example, /a/i will match the string "a" or "A".

// 1.
