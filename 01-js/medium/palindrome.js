/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let n = str.length - 1;
  let j = 0;
  var punctuations = [".", ",", ":", "!", "?", " "];
  if (str === "") {
    return true;
  }
  while (j <= n) {
    let flag = 0;
    if (str[j].toLowerCase() === str[n].toLowerCase()) {
      j++;
      n--;
    } else {
      if (punctuations.includes(str[j])) {
        j++;
        flag = 1;
      }
      if (punctuations.includes(str[n])) {
        n--;
        flag = 1;
      }
      if (flag === 0) {
        return false;
      }
    }
  }
  return true;
}

module.exports = isPalindrome;
