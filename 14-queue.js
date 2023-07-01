class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data.at(-1);
  }
}

module.exports = Queue;

// const q = new Queue();
// q.add(1);
// q.add(2);
// q.add(3);
// q.remove();
// q.remove();
// q.remove();
// console.log(q);
