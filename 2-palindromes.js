function palindrome_1(str) {
  return str === str.split('').reverse().join('');
}

function palindrome_2(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

console.log(palindrome_2('abba'));
