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

function py(n) {
  for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i) + '#'.repeat(i * 2 - 1)) + ' '.repeat(n - i);
  }
}

console.log(py(3));
