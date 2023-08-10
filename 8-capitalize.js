function capitalize(str) {
  return str
    .split(' ')
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(' ');
}

function capitalize2(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') result += str[i].toUpperCase();
    else result += str[i];
  }

  return result;
}

console.log(capitalize('serhat karadag'));
