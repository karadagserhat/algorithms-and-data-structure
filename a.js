// 1- (reverseString) "serhat" -> "tahres"

//************ */
// 2- (palindrome) "abba" -> true

/************* */
// 3- (integerReversal) -90 -> -9

//************ */
// 4- (maxChar) "abbbc" -> b

//*********** */
// 5- (fizzbuzz)

//*********** */
// 6- (arrayChunk) chunk([1, 2, 3, 4], 2)

//*********** */
// 7- (anagram) 'Hello!!!', 'he llo!.. -> true

//*********** */
// 8- (capitalize) 'serhat karadag' -> "Serhat Karadag"

//********* */
// 9- (steps) # ## ###

// 10- (pyramid) # ## ###

//*********** */
// 11- (vowel) "serhat" -> 2

//************ */
// 13- (fibonacci) 1 1 2 3 5 8 13

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

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) results.push(left.shift());
    else results.push(right.shift());
  }

  return [...results, ...left, ...right];
}

console.log(mergeSort([1, 2, 3, 55, 3, 44, 66, -12]));
