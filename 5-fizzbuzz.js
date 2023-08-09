function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else console.log(i);
  }
}

function fizzBuzz_2(n) {
  for (let i = 1; i <= n; i++) {
    let str = '';
    if (i % 3 === 0) str += 'fizz';
    if (i % 5 === 0) str += 'buzz';
    console.log(str || i);
  }
}

function fizzBuzz_3(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) console.log('fizzbuzz');
    else if (i % 3 === 0) console.log('fizz');
    else if (i % 5 === 0) console.log('buzz');
    else console.log(i);
  }
}

fizzBuzz_2(15);
