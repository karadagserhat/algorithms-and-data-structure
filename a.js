/// 1- reverseString(str) serhat -> tahres
/// 2- palindrome(str)   abba = abba
/// 3- integerReversal(n)  -51 = -15
/// 4- maxChar(str)     "abcccccd" -> c
/// 5- fizzbuzz(n)  5 * 3
/// 6- array chunks(array, size) -> chunk([1, 2, 3, 4], 2) -> [[1,2], [3,4]]

function chunk(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

console.log(chunk([1, 2, 3, 4], 2));
console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
