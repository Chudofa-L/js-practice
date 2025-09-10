const str = 'abaa'

function isPalindrom(str) {
  return console.log(str === str.split('').reverse().join(''));
}

isPalindrom(str)