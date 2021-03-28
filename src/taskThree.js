
function listedOccurrence(list, string) {
  let regex = new RegExp(list.join("|"), "g"),
      matches = string.match(regex),
      pair = {total: matches.length},
      counter = {};

  matches.forEach(m => counter[m] = counter[m] + 1 || 1);

  return {...counter, ...pair};
}
