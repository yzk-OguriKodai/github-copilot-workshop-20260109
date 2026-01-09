// fizzbuzz.js の関数化

function fizzbuzz(n) {
  if (
    typeof n !== "number" ||
    !Number.isFinite(n) ||
    !Number.isInteger(n) ||
    n <= 0 ||
    n > Number.MAX_SAFE_INTEGER ||
    typeof n === "bigint" ||
    typeof n === "symbol" ||
    typeof n === "function" ||
    Object.prototype.toString.call(n) === "[object Promise]" ||
    Object.prototype.toString.call(n) === "[object Date]"
  ) {
    throw new Error("入力値は正の整数でなければなりません");
  }
  let output = "";
  if (n % 3 === 0) output += "Fizz";
  if (n % 5 === 0) output += "Buzz";
  return output || n;
}

module.exports = { fizzbuzz };
