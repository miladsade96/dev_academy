import { describe, it, expect } from "vitest";
import { permutations } from "./main.js";

describe.skip("permutations", () => {
  it.each([
    { str: "abc", result: ["abc", "acb", "bac", "bca", "cab", "cba"] },
    { str: "dog", result: ["dog", "dgo", "odg", "ogd", "gdo", "god"] },
  ])("it should return $result for permutations($str)", ({ str, result }) => {
    expect(permutations(str)).toEqual(result);
  });
});
