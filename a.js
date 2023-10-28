/// 1- reverseString(str) serhat -> tahres

/// 2- palindrome(str)   abba = abba

/// 3- integerReversal(n)  -51 = -15

/// 4- maxChar(str)     "abcccccd" -> c

/// 5- fizzbuzz(n)  5 * 3

/// 6- array chunks(array, size) -> chunk([1, 2, 3, 4], 2) -> [[1,2], [3,4]]
// console.log(chunk([1, 2, 3, 4], 2));
// console.log(chunk([1, 2, 3, 4, 5], 2));
// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));

/// 7- anagrams ("rail safety", "fairy tales") -> true
// console.log(anagram('rail.... safety', 'fairy tales'));
// console.log(anagram('Hi there!!!', 'By there'));
// console.log(anagram('car', 'rac'));

/// 8- capitalize ("a short sentence") -> "A Short Sentence"
// console.log(capitalize('a short sentence'));
// console.log(capitalize('a lazy fox'));
// console.log(capitalize('look, it is working'));

/// 9- steps (2)  -> "# "  "##"
// console.log(steps(3));

/// 10- pyramid

function maxC(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let [key, value] of Object.entries(charMap)) {
    if (value > max) {
      max = value;
      maxChar = key;
    }
  }
  return maxChar;
}

console.log(maxC('abbbc1'));
console.log(maxC('12222234'));
