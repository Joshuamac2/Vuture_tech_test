function censorList(list, string) {
  const reg = RegExp('\\b'+list.join`\\b|\\b`+'\\b','gi')

  return string.replace(reg, m=> m[0] + '#'.repeat(m.length / 2) + m.charAt(m.length - 1));
};
