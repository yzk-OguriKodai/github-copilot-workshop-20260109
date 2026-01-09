const { fizzbuzz } = require("./fizzbuzz");

describe("FizzBuzz 単体テスト", () => {
  describe("15の倍数 (FizzBuzz)", () => {
    test.each([15])('fizzbuzz(%i) === "FizzBuzz"', (n) => {
      expect(fizzbuzz(n)).toBe("FizzBuzz");
    });
  });

  describe("3の倍数 (Fizz)", () => {
    test.each([3, 6, 9, 12, 18])('fizzbuzz(%i) === "Fizz"', (n) => {
      expect(fizzbuzz(n)).toBe("Fizz");
    });
  });

  describe("5の倍数 (Buzz)", () => {
    test.each([5, 10, 20])('fizzbuzz(%i) === "Buzz"', (n) => {
      expect(fizzbuzz(n)).toBe("Buzz");
    });
  });

  describe("その他 (数値)", () => {
    test.each([1, 2, 4, 7, 8, 11, 13, 14, 16, 17, 19])(
      "fizzbuzz(%i) === %i",
      (n) => {
        expect(fizzbuzz(n)).toBe(n);
      }
    );
  });

  // 入力値検証テスト
  describe("入力値バリデーション", () => {
    test.each([
      [0, "入力値は正の整数でなければなりません"],
      [-1, "入力値は正の整数でなければなりません"],
      [1.5, "入力値は正の整数でなければなりません"],
      [null, "入力値は正の整数でなければなりません"],
      [undefined, "入力値は正の整数でなければなりません"],
      ["3", "入力値は正の整数でなければなりません"],
      [{}, "入力値は正の整数でなければなりません"],
      [[], "入力値は正の整数でなければなりません"],
    ])("fizzbuzz(%p) throws", (input, message) => {
      expect(() => fizzbuzz(input)).toThrow(message);
    });
  });
});
