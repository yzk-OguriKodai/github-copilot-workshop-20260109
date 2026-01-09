# github-copilot-workshop-20260109

## FizzBuzz 関数について

### 概要

`fizzbuzz.js` には、与えられた正の整数に対して FizzBuzz 判定を行う `fizzbuzz(n)` 関数が実装されています。

### 仕様

- 入力値 `n` が 3 の倍数の場合は "Fizz" を返します。
- 入力値 `n` が 5 の倍数の場合は "Buzz" を返します。
- 両方の倍数の場合は "FizzBuzz" を返します。
- いずれにも該当しない場合は、元の数値 `n` を返します。

### 入力値のバリデーション

`fizzbuzz(n)` は、以下の条件をすべて満たす場合のみ正常に動作します。

- 型が `number` であること
- `Number.isFinite(n)` を満たすこと（無限大や NaN は不可）
- 整数であること
- 1 以上 `Number.MAX_SAFE_INTEGER` 以下であること
- BigInt 型、Symbol 型、関数、Promise、Date などの特殊な型は不可

上記以外の値が渡された場合は、エラー（"入力値は正の整数でなければなりません"）をスローします。

### 使い方

```js
const { fizzbuzz } = require("./fizzbuzz");

console.log(fizzbuzz(3)); // "Fizz"
console.log(fizzbuzz(5)); // "Buzz"
console.log(fizzbuzz(15)); // "FizzBuzz"
console.log(fizzbuzz(2)); // 2
// fizzbuzz("3") など不正な値は例外をスロー
```

### テスト

`fizzbuzz.test.js` にて、正常系・異常系ともに網羅的なテストが実装されています。
