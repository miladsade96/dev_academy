import { describe, it, expect } from "vitest";
import { power } from "./main.js";

describe("power", () => {
  it.each([
    { base: 3, exponent: 0, result: 1 },
    { base: 3, exponent: 1, result: 3 },
    { base: 4, exponent: 2, result: 16 },
    { base: 5, exponent: 3, result: 125 },
    { base: 2, exponent: 6, result: 64 },
    { base: 1, exponent: 7, result: 1 },
    { base: 6, exponent: 4, result: 1296 },
    { base: 8, exponent: 3, result: 512 },
    { base: 9, exponent: 5, result: 59049 },
  ])(
    "It should return $result for power($base, $exponent)",
    ({ base, exponent, result }) => {
      expect(power(base, exponent)).toBe(result);
    },
  );
});
