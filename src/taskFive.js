function censorPalindrome(string) {
  let arrayValues = string.toLowerCase().split(' ');

  let palindromes = arrayValues.filter(w => {
    let len = w.length;
    for (let i = 0; i < len / 2; i++) {
      if (w[i] == w[len - i - 1]) {
        return true;
      } else {
        return false;
      }
    }
  });

  const reg = RegExp('\\b'+palindromes.join`\\b|\\b`+'\\b','gi')
  return string.replace(reg, m=> m[0] + '$'.repeat(m.length / 1.5) + m.charAt(m.length - 1));
}
