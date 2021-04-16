
function listedOccurrence(list, string) {
  let regex = new RegExp(list.join("|"), "g"),
      matches = string.match(regex),
      pair = {total: matches.length},
      counter = {};

  matches.forEach(m => counter[m] = counter[m] + 1 || 1);

  return {...counter, ...pair};
}


// 1. the regex varible makes list = /dog|cat|large/g
// 1. matches matchs the string vs the regex
