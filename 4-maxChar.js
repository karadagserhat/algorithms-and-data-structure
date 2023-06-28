function maxChar_1(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) charMap[char]++;
    else charMap[char] = 1;
  }

  //   for (let char in charMap) {
  //     if (charMap[char] > max) {
  //       max = charMap[char];
  //       maxChar = char;
  //     }
  //   }

  for (let [key, value] of Object.entries(charMap)) {
    if (value > max) {
      max = value;
      maxChar = key;
    }
  }
  return maxChar;
}
console.log(maxChar_1('serhatta ss'));
