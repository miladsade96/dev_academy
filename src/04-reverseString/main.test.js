import { describe, expect, it } from "vitest";
import { reverseStringV1, reverseStringV2, reverseStringV3 } from "./main";

describe("reverseString function tests", () => {
  it.each([
    { str: "", expected: "" },
    { str: "M", expected: "M" },
    { str: "Milad Sadeghi", expected: "ihgedaS daliM" },
    { str: "JavaScript", expected: "tpircSavaJ" },
    { str: "0123456789", expected: "9876543210" },
  ])("reverseStringV1($str) equals to $expected", ({ str, expected }) => {
    expect(reverseStringV1(str)).toBe(expected);
  });

  it.each([
    { str: "", expected: "" },
    { str: "S", expected: "S" },
    { str: "TypeScript", expected: "tpircSepyT" },
    { str: "Algorithms", expected: "smhtiroglA" },
    { str: "Data Structures", expected: "serutcurtS ataD" },
  ])("reverseStringV2($str) equals to $expected", ({ str, expected }) => {
    expect(reverseStringV2(str)).toBe(expected);
  });

  it.each([
    { str: "", expected: "" },
    { str: "S", expected: "S" },
    { str: "TypeScript", expected: "tpircSepyT" },
    { str: "Algorithms", expected: "smhtiroglA" },
    { str: "Data Structures", expected: "serutcurtS ataD" },
  ])("reverseStringV3($str) equals to $expected", ({ str, expected }) => {
    expect(reverseStringV3(str)).toBe(expected);
  });
});
