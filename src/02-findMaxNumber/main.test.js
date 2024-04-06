const functions = require("./main");
const { findMaxNumberV1, findMaxNumberV2, findMaxNumberV3 } = functions;

const massiveArray = Array.from({ length: 1000000 }, () => 10);

describe("findMaxNumberV1 tests", () => {
  it.each([
    { arrOfNums: [1, 2, 3, 4], expected: 4 },
    { arrOfNums: [-1, -2, -3, -4], expected: -1 },
    { arrOfNums: [1, 1, 1, 1, 1], expected: 1 },
    { arrOfNums: massiveArray, expected: 10 },
  ])(
    "findMaxNumberV1($arrOfNums) is equal to $expected",
    ({ arrOfNums, expected }) => {
      expect(findMaxNumberV1(arrOfNums)).toBe(expected);
    },
  );
});

describe("findMaxNumberV2 tests", () => {
  it.each([
    { arrOfNums: [1, 2, 3, 4], expected: 4 },
    { arrOfNums: [-1, -2, -3, -4], expected: -1 },
    { arrOfNums: [1, 1, 1, 1, 1], expected: 1 },
    { arrOfNums: massiveArray, expected: 10 },
  ])(
    "findMaxNumber2($arrOfNums) is equal to $expected",
    ({ arrOfNums, expected }) => {
      expect(findMaxNumberV2(arrOfNums)).toBe(expected);
    },
  );
});

describe("findMaxNumberV3 tests", () => {
  it.each([
    { arrOfNums: [1, 2, 3, 4], expected: 4 },
    { arrOfNums: [-1, -2, -3, -4], expected: -1 },
    { arrOfNums: [1, 1, 1, 1, 1], expected: 1 },
    { arrOfNums: massiveArray, expected: 10 },
  ])(
    "findMaxNumberV3($arrOfNums) is equal to $expected",
    ({ arrOfNums, expected }) => {
      expect(findMaxNumberV3(arrOfNums)).toBe(expected);
    },
  );
});
