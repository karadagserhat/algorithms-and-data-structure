// 1- (reverseString) "serhat" -> "tahres"
function reverseString(str) {
  return str.split('').reverse().join('');
}

function reverseString2(str) {
  let rev = '';

  for (let char of str) {
    rev = char + rev;
  }

  return rev;
}

//************ */
// 2- (palindrome) "abba" -> true

function palindrome(str) {
  return str === str.split('').reverse().join('');
}

/************* */
// 3- (integerReversal) -90 -> -9

function integerReversal(n) {
  let rev = n.toString().split('').reverse().join('');

  return parseInt(rev) * Math.sign(n);
}

//************ */
// 4- (maxChar) "abbbc" -> b

function maxChar(str) {
  let max = 0;
  let maxC = '';

  let charMap = charMapF(str);

  for (let [key, value] of Object.entries(charMap)) {
    if (value > max) {
      max = value;
      maxC = key;
    }
  }

  return maxC;
}

function charMapF(str) {
  let map = {};

  for (let char of str) {
    map[char] = map[char] + 1 || 1;
  }

  return map;
}

//*********** */
// 5- (fizzbuzz)

function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) console.log('fizzbuzz');
    else if (i % 3 === 0) console.log('fizz');
    else if (i % 5 === 0) console.log('buzz');
    else console.log(i);
  }
}

//*********** */
// 6- (arrayChunk) chunk([1, 2, 3, 4], 2)

function chunk(arr, size) {
  const chunked = [];

  for (let element of arr) {
    const last = chunked.at(-1);

    if (!last || last.length === size) chunked.push([element]);
    else last.push(element);
  }

  return chunked;
}

//*********** */
// 7- (anagram) 'Hello!!!', 'he llo!..' -> true

function anagram(s1, s2) {
  return cleanString(s1) === cleanString(s2);
}

function cleanString(str) {
  return str.replace(/\W/g, '').toLowerCase().split('').sort().join('');
}

//*********** */
// 8- (capitalize) 'serhat karadag' -> "Serhat Karadag"

function capitalize(str) {
  return str
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

//********* */
// 9- (steps) # ## ###

function steps(n) {
  for (let i = 1; i <= n; i++) {
    console.log('#'.repeat(i) + ' '.repeat(n - i));
  }
}

// 10- (pyramid) # ## ###

//*********** */
// 11- (vowel) "serhat" -> 2

function vowel(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}

//************ */
// 13- (fibonacci) 1 1 2 3 5 8 13

function fibonacci(n) {
  const arr = [1, 1];

  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr;
}

//********* */
// 14- (queue)

//********* */
// 15- (weave)

//********* */
// 16- (stack)

//*********** */
// 17- (queueFromStack)  Stack + Stack = Queue

//********* */
// 18- (linkedList)

//********* */
// 19- midpoint

//********** */
// 20- circularList

//*********** */
// 21- fromLast

//********** */
// 22- Tree

//********** */
// 26- bubble sort

//********** */
// 27- selection sort

/********* */
// 28- merge sort
