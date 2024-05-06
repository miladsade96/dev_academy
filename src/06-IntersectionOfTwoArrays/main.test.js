const functions = require("./main");
const { intersectionV1, intersectionV2, intersectionV3 } = functions;

describe("intersectionOfTwoArrays function tests", () => {
  it.each([
    { arr1: [1, 2, 3, 4, 5], arr2: [2, 3, 4, 5, 6], expected: [2, 3, 4, 5] },
    { arr1: [1, 2, 3], arr2: [2, 3, 4, 5, 6, 6, 7], expected: [2, 3] },
    { arr1: [1, 2, 3, 4, 5, 6, 6, 7, 7, 8], arr2: [5, 5, 6], expected: [5, 6] },
    { arr1: [], arr2: [2, 3, 4, 5, 6], expected: [] },
    { arr1: [1, 2, 3, 4, 5], arr2: [], expected: [] },
    { arr1: [1, 1, 1, 1, 1], arr2: [1, 1, 1, 1, 1], expected: [1] },
  ])(
    "intersectionV1($arr1, $arr2) equals to $expected",
    ({ arr1, arr2, expected }) => {
      expect(intersectionV1(arr1, arr2)).toStrictEqual(expected);
    },
  );

  it.each([
    { arr1: [1, 2, 3, 4, 5], arr2: [2, 3, 4, 5, 6], expected: [2, 3, 4, 5] },
    { arr1: [1, 2, 3], arr2: [2, 3, 4, 5, 6, 6, 7], expected: [2, 3] },
    { arr1: [1, 2, 3, 4, 5, 6, 6, 7, 7, 8], arr2: [5, 5, 6], expected: [5, 6] },
    { arr1: [], arr2: [2, 3, 4, 5, 6], expected: [] },
    { arr1: [1, 2, 3, 4, 5], arr2: [], expected: [] },
    { arr1: [1, 1, 1, 1, 1], arr2: [1, 1, 1, 1, 1], expected: [1] },
  ])(
    "intersectionV2($arr1, $arr2) equals to $expected",
    ({ arr1, arr2, expected }) => {
      expect(intersectionV2(arr1, arr2)).toStrictEqual(expected);
    },
  );

  it.each([
    { arr1: [1, 2, 3, 4, 5], arr2: [2, 3, 4, 5, 6], expected: [2, 3, 4, 5] },
    { arr1: [1, 2, 3], arr2: [2, 3, 4, 5, 6, 6, 7], expected: [2, 3] },
    { arr1: [1, 2, 3, 4, 5, 6, 6, 7, 7, 8], arr2: [5, 5, 6], expected: [5, 6] },
    { arr1: [], arr2: [2, 3, 4, 5, 6], expected: [] },
    { arr1: [1, 2, 3, 4, 5], arr2: [], expected: [] },
    { arr1: [1, 1, 1, 1, 1], arr2: [1, 1, 1, 1, 1], expected: [1] },
  ])(
    "intersectionV3($arr1, $arr2) equals to $expected",
    ({ arr1, arr2, expected }) => {
      expect(intersectionV3(arr1, arr2)).toStrictEqual(expected);
    },
  );
});
