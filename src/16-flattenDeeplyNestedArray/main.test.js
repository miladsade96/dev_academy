import { flatV1, flatV2 } from "./main.js";
import { describe, it, expect } from "vitest";

describe("flatV1 tests", () => {
  it("should flatten an empty array", () => {
    expect(flatV1([], 0)).toEqual([]);
  });

  it("should flatten a nested array with depth 1", () => {
    expect(flatV1([1, [2, 3]], 1)).toEqual([1, 2, 3]);
  });

  it("should flatten a nested array with depth 2", () => {
    expect(flatV1([1, [2, [3, 4]]], 2)).toEqual([1, 2, 3, 4]);
  });

  it("should flatten a nested array with depth 3", () => {
    expect(flatV1([1, [2, [3, [4, 5]]]], 3)).toEqual([1, 2, 3, 4, 5]);
  });

  it("should not flatten a nested array beyond the specified depth", () => {
    expect(flatV1([1, [2, [3, [4, 5]]]], 2)).toEqual([1, 2, 3, [4, 5]]);
  });
});

describe("flatV2 tests", () => {
  it("should flatten an empty array", () => {
    expect(flatV2([], 0)).toEqual([]);
  });

  it("should flatten a nested array with depth 1", () => {
    expect(flatV2([1, [2, 3]], 1)).toEqual([1, 2, 3]);
  });

  it("should flatten a nested array with depth 2", () => {
    expect(flatV2([1, [2, [3, 4]]], 2)).toEqual([1, 2, 3, 4]);
  });

  it("should flatten a nested array with depth 3", () => {
    expect(flatV2([1, [2, [3, [4, 5]]]], 3)).toEqual([1, 2, 3, 4, 5]);
  });

  it("should not flatten a nested array beyond the specified depth", () => {
    expect(flatV2([1, [2, [3, [4, 5]]]], 2)).toEqual([1, 2, 3, [4, 5]]);
  });
});
