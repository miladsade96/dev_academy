const functions = require("./main");
const { fibonacciNumberV1, fibonacciNumberV2 } = functions;

describe("fibonacciNumber", () => {
  it.each([
    { number: 0, expected: 0 },
    { number: 1, expected: 1 },
    { number: 2, expected: 1 },
    { number: 3, expected: 2 },
    { number: 4, expected: 3 },
    { number: 5, expected: 5 },
    { number: 6, expected: 8 },
    { number: 7, expected: 13 },
    { number: 8, expected: 21 },
  ])(
    "fibonacciNumberV1($number) is equal to $expected",
    ({ number, expected }) => {
      expect(fibonacciNumberV1(number)).toBe(expected);
    },
  );

  it.each([
    { number: 0, expected: 0 },
    { number: 1, expected: 1 },
    { number: 2, expected: 1 },
    { number: 3, expected: 2 },
    { number: 4, expected: 3 },
    { number: 5, expected: 5 },
    { number: 6, expected: 8 },
    { number: 7, expected: 13 },
    { number: 8, expected: 21 },
  ])(
    "fibonacciNumberV2($number) is equal to $expected",
    ({ number, expected }) => {
      expect(fibonacciNumberV2(number)).toBe(expected);
    },
  );
});
