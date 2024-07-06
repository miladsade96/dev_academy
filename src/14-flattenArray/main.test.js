import { describe, expect, it } from "vitest";
import { flattenArray } from "./main.js";

describe("flattenArray", () => {
  it.each([
    { arr: [1], result: [1] },
    { arr: [1, [2]], result: [1, 2] },
    { arr: [1, [2, [3]]], result: [1, 2, 3] },
    { arr: [1, [2, [3, [4]]]], result: [1, 2, 3, 4] },
    { arr: [1, [2, [3, [4, [5]]]]], result: [1, 2, 3, 4, 5] },
  ])("it should return $result for flattenArray($arr)", ({ arr, result }) => {
    expect(flattenArray(arr)).toEqual(result);
  });
});
