import { describe, it, expect } from "vitest";
import { permutations } from "./main.js";

describe("permutations", () => {
  it.each([
    { str: "abc", result: ["abc", "acb", "bac", "bca", "cab", "cba"] },
    { str: "dog", result: ["dog", "dgo", "odg", "ogd", "gdo", "god"] },
    {
      str: "abcd",
      result: [
        "abcd",
        "abdc",
        "acbd",
        "acdb",
        "adbc",
        "adcb",
        "bacd",
        "badc",
        "bcad",
        "bcda",
        "bdac",
        "bdca",
        "cabd",
        "cadb",
        "cbad",
        "cbda",
        "cdab",
        "cdba",
        "dabc",
        "dacb",
        "dbac",
        "dbca",
        "dcab",
        "dcba",
      ],
    },
  ])("it should return $result for permutations($str)", ({ str, result }) => {
    expect(permutations(str)).toEqual(result);
  });
});
