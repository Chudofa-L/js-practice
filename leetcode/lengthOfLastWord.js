let s = "   fly me   to   the moon    "

const lengthOfLastWord = function (s) {
  const sArr = s.split(' ').reverse().filter((el) => el != '');
  console.log(sArr);
  console.log(sArr[0].length);
}

lengthOfLastWord(s)