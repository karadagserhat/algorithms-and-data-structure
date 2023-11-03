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

function fromLast(list, n) {
  let slow = list.head;
  let fast = list.head;

  while (n > 0) {
    fast = fast.next;
    n--;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}
