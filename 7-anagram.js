function anagrams_1(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  //   for (let char in aCharMap) {
  //     if (aCharMap[char] !== bCharMap[char]) {
  //       return false;
  //     }
  //   }

  for (let [key, value] of Object.entries(aCharMap)) {
    if (value !== bCharMap[key]) return false;
  }

  return true;
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

/////////////////////
///////////////

function anagrams_2(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/\W/g, '').toLowerCase().split('').sort().join('');
}

console.log(anagrams_2('Hello!!!', 'he llo!...'));

// const str = 'Hello abc!!!';
// console.log(str.replace(/[^\w]/g, ''));
