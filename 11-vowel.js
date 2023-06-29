function vowel_1(str) {
  let count = 0;
  const checker = ['a', 'e', 'i', 'o', 'u'];

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) count++;
  }
  return count;
}

function vowel_2(str) {
  const matches = str.match(/[aeiou]/gi);

  return matches ? matches.length : 0;
}

function vowels_3(str) {
    return str.replace(/[^euioa]/gi, '').length;
  }

console.log(vowel_2('serhat'));
