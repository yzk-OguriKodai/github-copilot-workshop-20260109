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
      [BigInt(3), "入力値は正の整数でなければなりません"],
      [Symbol("sym"), "入力値は正の整数でなければなりません"],
      [() => 3, "入力値は正の整数でなければなりません"],
      [new Date(), "入力値は正の整数でなければなりません"],
      [Promise.resolve(3), "入力値は正の整数でなければなりません"],
    ])("fizzbuzz(%p) throws", (input, message) => {
      expect(() => fizzbuzz(input)).toThrow(message);
    });
  });

  // 追加テストケース
  describe("追加テスト", () => {
    test("非常に大きな数値", () => {
      expect(fizzbuzz(3000000)).toBe("FizzBuzz");
      expect(fizzbuzz(3000003)).toBe("Fizz");
      expect(fizzbuzz(3000005)).toBe("Buzz");
    });

    test("Number.MAX_SAFE_INTEGER", () => {
      // 3, 5, 15の倍数でないのでそのまま返す
      expect(fizzbuzz(Number.MAX_SAFE_INTEGER)).toBe(Number.MAX_SAFE_INTEGER);
    });

    test("Number.MAX_SAFE_INTEGER+1は例外", () => {
      expect(() => fizzbuzz(Number.MAX_SAFE_INTEGER + 1)).toThrow();
    });

    test("数値文字列は例外", () => {
      expect(() => fizzbuzz("15")).toThrow();
    });

    test("空文字は例外", () => {
      expect(() => fizzbuzz("")).toThrow();
    });

    test("NaNは例外", () => {
      expect(() => fizzbuzz(NaN)).toThrow();
    });

    test("Infinityは例外", () => {
      expect(() => fizzbuzz(Infinity)).toThrow();
    });
  });

  // パフォーマンステスト（雛形）
  // TODO: パフォーマンステストを追加する (例: 100万回実行しても例外が出ないことを確認)
});
