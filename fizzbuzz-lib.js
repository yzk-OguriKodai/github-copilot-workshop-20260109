// fizzbuzz.js の関数化
function fizzbuzz(n) {
  let output = '';
  if (n % 3 === 0) output += 'Fizz';
  if (n % 5 === 0) output += 'Buzz';
  return output || n;
}

module.exports = { fizzbuzz };