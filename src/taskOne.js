function countElement(string, letter) {
  let count = 0;

  for(let i = 0; i < string.length; i++) {
    if (string.charAt(i) == letter) {
      count += 1;
    }
  }
  return count;
};
