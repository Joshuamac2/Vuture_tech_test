function palindromic(string) {
  var rexStr = /[\W_]/g;
  var lowStr = string.toLowerCase().replace(rexStr, '');
  var reverseStr = lowStr.split('').reverse().join('');
  return reverseStr === lowStr;
};


// 1. rexStr dose: ([] start and end of character set)(\W removes non-word), (g means its a global search, i.e.  should be tested against all possible matches in a string.)
// 2. the '' in replac emethod, if removed the extra space will print out undefined ("godundefinedsavedundefinedevaundefinedsundefineddog")
