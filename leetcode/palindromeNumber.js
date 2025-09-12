const x = -121;

const isPalindrome = function (x) {
  return console.log(x == x.toString().split('').reverse().join(''));
};

isPalindrome(x)