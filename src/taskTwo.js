function palindromic(string) {
  var rexStr = /[\W_]/g;
  var lowStr = string.toLowerCase().replace(rexStr, '');
  var reverseStr = lowStr.split('').reverse().join('');
  return reverseStr === lowStr;
};
