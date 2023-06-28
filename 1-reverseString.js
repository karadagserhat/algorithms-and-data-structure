function reverseString_1(str) {
  return str.split('').reverse().join('');
}

function reverseString_2(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

function reverseString_3(str) {
  return str.split('').reduce((reversed, character) => character + reversed, '');
}

console.log(reverseString_3('serhat'));
