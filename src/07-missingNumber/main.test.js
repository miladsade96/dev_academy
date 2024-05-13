const functions = require("./main");
const { findMissingNumberV1, findMissingNumberV2 } = functions;

describe("findMissingNumber function tests", () => {
  it.each([
    { arr: [0], expected: 1 },
    { arr: [1], expected: 0 },
    { arr: [1, 0, 3], expected: 2 },
    { arr: [1, 2, 0, 3, 4, 5, 6, 8, 9, 10], expected: 7 },
  ])("findMissingNumberV1($arr) equals to: $expected", ({ arr, expected }) => {
    expect(findMissingNumberV1(arr)).toBe(expected);
  });

  it.each([
    { arr: [0], expected: 1 },
    { arr: [1], expected: 0 },
    { arr: [1, 0, 3], expected: 2 },
    { arr: [1, 2, 0, 3, 4, 5, 6, 8, 9, 10], expected: 7 },
  ])("findMissingNumberV2($arr) equals to: $expected", ({ arr, expected }) => {
    expect(findMissingNumberV2(arr)).toBe(expected);
  });
});
