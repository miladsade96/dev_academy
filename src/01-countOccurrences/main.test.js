import { describe, it, expect } from "vitest";
import {
  countOccurrencesV1,
  countOccurrencesV2,
  countOccurrencesV3,
} from "./main";

describe("countOccurrences functions tests", () => {
  it.each([
    { totalString: "Hello", desiredChar: "l", expected: 2 },
    { totalString: "Milad", desiredChar: "a", expected: 1 },
    { totalString: "JavaScript", desiredChar: "s", expected: 0 },
    { totalString: "Rebecca", desiredChar: "c", expected: 2 },
  ])(
    "countOccurrencesV1($totalString, $desiredChar) is equal to $expected",
    ({ totalString, desiredChar, expected }) => {
      expect(countOccurrencesV1(totalString, desiredChar)).toBe(expected);
    },
  );

  it.each([
    { totalString: "Hello", desiredChar: "l", expected: 2 },
    { totalString: "Milad", desiredChar: "a", expected: 1 },
    { totalString: "JavaScript", desiredChar: "s", expected: 0 },
    { totalString: "Rebecca", desiredChar: "c", expected: 2 },
  ])(
    "countOccurrencesV2($totalString, $desiredChar) equals to $expected",
    ({ totalString, desiredChar, expected }) => {
      expect(countOccurrencesV2(totalString, desiredChar)).toBe(expected);
    },
  );

  it.each([
    { totalString: "Hello", desiredChar: "l", expected: 2 },
    { totalString: "Milad", desiredChar: "a", expected: 1 },
    { totalString: "JavaScript", desiredChar: "s", expected: 0 },
    { totalString: "Rebecca", desiredChar: "c", expected: 2 },
  ])(
    "countOccurrencesV3($totalString, $desiredChar) equals to $expected",
    ({ totalString, desiredChar, expected }) => {
      expect(countOccurrencesV3(totalString, desiredChar)).toBe(expected);
    },
  );
});
