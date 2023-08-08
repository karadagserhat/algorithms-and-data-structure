function reverseInt(n) {
  const a = n.toString().split('').reverse().join('');
  return parseInt(a) * Math.sign(n);
}

console.log(reverseInt(15));
console.log(reverseInt(500));
console.log(reverseInt(-15));
console.log(reverseInt(-90));
