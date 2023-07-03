function levelWidth(root) {
  const arr = [root, 's']; // s -> stopper
  const counters = [0];

  while (arr.length > 1) {
    const node = arr.shift();

    if (node === 's') {
      counters.push(0);
      arr.push('s');
    } else {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }

  return counters;
}


// const counters = [];
// let arr = [root];
// while (arr.length) {
//   counters.push(arr.length);
//   arr.forEach(node => arr.push(...node.children));
//   arr = arr.slice(counters[counters.length - 1]);
// }
// return counters;