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

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
console.log(s);
