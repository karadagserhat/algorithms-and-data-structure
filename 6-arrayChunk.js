function chunk1(array, size) {
  const chunked = [];

  for (let element of array) {
    const last = chunked.at(-1);

    if (!last || last.length === size) chunked.push([element]);
    else last.push(element);
  }

  return chunked;
}

function arrayChunk_2(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

console.log(arrayChunk_2([1, 2, 3, 4, 5, 8, 1], 3));

console.log(chunk([1, 2, 3, 4], 2));
console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
