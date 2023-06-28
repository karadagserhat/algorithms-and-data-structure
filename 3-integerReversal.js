function reverseInt_1(n) {
  const reversed = parseInt(n.toString().split('').reverse().join(''));
  return Math.sign(n) === 1 ? reversed : -reversed;
}

console.log(reverseInt_1(120));
