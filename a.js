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
class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data.at(-1);
  }
}

class Queue {
  constructor() {
    this.firstStack = new Stack();
    this.secondStack = new Stack();
  }

  add(n) {
    return this.firstStack.push(n);
  }

  remove() {
    while (this.firstStack.peek()) {
      this.secondStack.push(this.firstStack.pop());
    }

    const record = this.secondStack.pop();

    while (this.secondStack.peek()) {
      this.firstStack.push(this.secondStack.pop());
    }

    console.log(record);
  }

  peek() {
    while (this.firstStack.peek()) {
      this.secondStack.push(this.firstStack.pop());
    }

    const record = this.secondStack.peek();

    while (this.secondStack.peek()) {
      this.firstStack.push(this.secondStack.pop());
    }

    console.log(record);
  }
}

const q = new Queue();
q.add(6);
q.add(5);
q.add(3);
console.log(q);
console.log(q.peek());
