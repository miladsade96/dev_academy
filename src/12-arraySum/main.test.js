import { describe, expect, it } from "vitest";
import { arraySum } from "./main.js";

describe("arraySum", () => {
  it.each([
    { arr: [], result: 0 },
    { arr: [0], result: 0 },
    { arr: [0, 1], result: 1 },
    { arr: [1, 2, 3, 4], result: 10 },
    { arr: [-1, -2], result: -3 },
    { arr: [1, 2, -3, 5, -1], result: 4 },
  ])("It should return $result for arraySum($arr)", ({ arr, result }) => {
    expect(arraySum(arr)).toBe(result);
  });
});
