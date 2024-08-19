import { describe, it, expect } from "vitest";
import { repeatedCharacter } from "./main.js";

describe("repeatedCharacter", () => {
  it.each([
    {
      str: "aa",
      output: "a",
    },
    {
      str: "abba",
      output: "b",
    },
    {
      str: "abccba",
      output: "c",
    },
    {
      str: "abcdd",
      output: "d",
    },
    {
      str: "abcdea",
      output: "a",
    },
  ])(
    "It should return $output for repeatedCharacter($str)",
    ({ str, output }) => {
      expect(repeatedCharacter(str)).toBe(output);
    },
  );
});
