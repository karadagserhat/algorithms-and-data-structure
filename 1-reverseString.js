function reverse1(str) {
  return str.split('').reverse().join('');
}

function reverse2(str) {
  let r = '';

  for (let char of str) {
    r = char + r;
  }

  return r;
}

function reverse3(str) {
  return str.split('').reduce((acc, curr) => curr + acc, '');
}

console.log(reverse1('serhat'));
console.log(reverse2('serhat'));
console.log(reverse3('serhat'));
