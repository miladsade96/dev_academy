import { describe, it, expect } from "vitest";
import { numberRange } from "./main.js";

describe("numberRange", () => {
  it.each([
    { startNum: 1, endNum: 2, result: [1, 2] },
    { startNum: 2, endNum: 5, result: [2, 3, 4, 5] },
    { startNum: 1, endNum: 10, result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { startNum: 5, endNum: 5, result: [5] },
    { startNum: 3, endNum: 8, result: [3, 4, 5, 6, 7, 8] },
    { startNum: 7, endNum: 12, result: [7, 8, 9, 10, 11, 12] },
  ])(
    "it should return $result for numberRange($startNum, $endNum)",
    ({ startNum, endNum, result }) => {
      expect(numberRange(startNum, endNum)).toEqual(result);
    },
  );
});
