function palindrome1(str) {
  return str === str.split('').reverse().join('');
}

function palindrome2(str) {
  return str.split('').every((char, i) => char === str[str.length - 1 - i]);
}

console.log(palindrome1('abba'));
console.log(palindrome2('aha'));
