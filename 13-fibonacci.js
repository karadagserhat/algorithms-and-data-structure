function fib_1(n) {
  const results = [0, 1];

  for (let i = 2; i <= n; i++) {
    const a = results[i - 1];
    const b = results[i - 2];

    results.push(a + b);
  }

  //   return results[n];
  return results.at(-1);
}

///////// recursion
function fib_2(n) {
  if (n < 2) return n;

  return fib_2(n - 1) + fib_2(n - 2);
}

/////// memoization
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) return cache[args];

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n) {
  if (n < 2) return n;

  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

console.log(fib(7));
// console.log(fib_2(7));
