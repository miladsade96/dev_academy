import { describe, expect, it } from "vitest";
import { isPalindromeV1, isPalindromeV2 } from "./main";

describe("isPalindrome function tests", () => {
  it.each([
    { str: "madam", expected: true },
    { str: "madam   ", expected: true },
    { str: "racecar", expected: true },
    { str: "racecars", expected: false },
    { str: "Madam@*() ", expected: true },
    { str: "A man, a plan, a canal: Panama", expected: true },
    { str: "race a car", expected: false },
    { str: " ", expected: true },
  ])("isPalindromeV1($str) equals to $expected", ({ str, expected }) => {
    expect(isPalindromeV1(str)).toBe(expected);
  });

  it.each([
    { str: "madam", expected: true },
    { str: "madam   ", expected: true },
    { str: "racecar", expected: true },
    { str: "racecars", expected: false },
    { str: "Madam@*() ", expected: true },
    { str: "A man, a plan, a canal: Panama", expected: true },
    { str: "race a car", expected: false },
    { str: " ", expected: true },
  ])("isPalindromeV2($str) equals to $expected", ({ str, expected }) => {
    expect(isPalindromeV2(str)).toBe(expected);
  });
});
