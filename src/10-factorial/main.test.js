import { describe, expect, it } from "vitest";
import { factorial } from "./main";

describe("factorial", () => {
  it.each([
    { n: 0, result: 1 },
    { n: 1, result: 1 },
    { n: 2, result: 2 },
    { n: 3, result: 6 },
    { n: 4, result: 24 },
    { n: 5, result: 120 },
  ])("It should return $result for factorial($n)", ({ n, result }) => {
    expect(factorial(n)).toBe(result);
  });
});
