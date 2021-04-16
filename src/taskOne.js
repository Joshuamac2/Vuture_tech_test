function countElement(string, letter) {
  let count = 0;

  for(let i = 0; i < string.length; i++) {
    if (string.charAt(i) == letter) {
      count += 1;
    }
  }
  return count;
};

// 1. Name variables better
// 2. update sytax, i.e. count += 1; should be count++;
// 3. charAt finds the exact index.
// 4. write it in Es6
