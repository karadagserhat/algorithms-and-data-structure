function steps_1(n) {
  for (let i = 1; i <= n; i++) {
    console.log('#'.repeat(i) + ' '.repeat(n - i));
  }
}

function steps_2(n) {
  for (let i = 1; i <= n; i++) {
    console.log('#'.repeat(i).padEnd(n));
  }
}

function steps_3(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';

    for (let col = 0; col < n; col++) {
      if (col <= row) stair += '#';
      else stair += ' ';
    }

    console.log(stair);
  }
}

function steps_4(n, row = 0, stair = '') {
  if (n === row) return;

  if (n === stair.length) {
    console.log(stair);
    return steps_4(n, row + 1);
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  steps_4(n, row, stair);
}

steps_4(5);
