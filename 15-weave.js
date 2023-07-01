const Queue = require('./14-queue');

function weave(source1, source2) {
  const q = new Queue();

  while (source1.peek() !== undefined || source2.peek() !== undefined) {
    if (source1.peek() !== undefined) q.add(source1.remove());

    if (source2.peek() !== undefined) q.add(source2.remove());
  }

  return q;
}

// const source1 = new Queue();
// source1.add(1);
// source1.add(2);
// source1.add(3);

// const source2 = new Queue();
// source2.add('a');
// source2.add('b');
// source2.add('c');

// console.log(weave(source1, source2));
