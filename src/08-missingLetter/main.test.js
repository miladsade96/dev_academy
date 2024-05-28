const functions = require("./main");
const {
  findMissingLetterV1,
  findMissingLetterV2,
  findMissingLetterV3,
  findMissingLetterV4,
  findMissingLetterV5,
} = functions;

describe("findMissingLetter function tests", () => {
  it.each([
    { arrOfChars: [], expected: "" },
    { arrOfChars: ["a"], expected: "" },
    { arrOfChars: ["a", "c"], expected: "b" },
    { arrOfChars: ["a", "b", "c"], expected: "" },
    { arrOfChars: ["A", "B", "C", "E"], expected: "D" },
    { arrOfChars: ["A", "B", "C", "D", "E", "F", "G"], expected: "" },
    { arrOfChars: ["C", "D", "E", "G"], expected: "F" },
  ])(
    "findMissingLetterV1($arrOfChars) is equal to: $expected",
    ({ arrOfChars, expected }) => {
      expect(findMissingLetterV1(arrOfChars)).toBe(expected);
    },
  );

  it.each([
    { arrOfChars: [], expected: "" },
    { arrOfChars: ["a"], expected: "" },
    { arrOfChars: ["a", "c"], expected: "b" },
    { arrOfChars: ["a", "b", "c"], expected: "" },
    { arrOfChars: ["A", "B", "C", "E"], expected: "D" },
    { arrOfChars: ["A", "B", "C", "D", "E", "F", "G"], expected: "" },
    { arrOfChars: ["C", "D", "E", "G"], expected: "F" },
  ])(
    "findMissingLetterV2($arrOfChars) is equal to: $expected",
    ({ arrOfChars, expected }) => {
      expect(findMissingLetterV2(arrOfChars)).toBe(expected);
    },
  );

  it.each([
    { arrOfChars: [], expected: "" },
    { arrOfChars: ["a"], expected: "" },
    { arrOfChars: ["a", "c"], expected: "b" },
    { arrOfChars: ["a", "b", "c"], expected: "" },
    { arrOfChars: ["A", "B", "C", "E"], expected: "D" },
    { arrOfChars: ["A", "B", "C", "D", "E", "F", "G"], expected: "" },
    { arrOfChars: ["C", "D", "E", "G"], expected: "F" },
  ])(
    "findMissingLetterV3($arrOfChars) is equal to: $expected",
    ({ arrOfChars, expected }) => {
      expect(findMissingLetterV3(arrOfChars)).toBe(expected);
    },
  );

  it.each([
    { arrOfChars: [], expected: "" },
    { arrOfChars: ["a"], expected: "" },
    { arrOfChars: ["a", "c"], expected: "b" },
    { arrOfChars: ["a", "b", "c"], expected: "" },
    { arrOfChars: ["A", "B", "C", "E"], expected: "D" },
    { arrOfChars: ["A", "B", "C", "D", "E", "F", "G"], expected: "" },
    { arrOfChars: ["C", "D", "E", "G"], expected: "F" },
  ])(
    "findMissingLetterV4($arrOfChars) is equal to: $expected",
    ({ arrOfChars, expected }) => {
      expect(findMissingLetterV4(arrOfChars)).toBe(expected);
    },
  );

  it.each([
    { arrOfChars: [], expected: "" },
    { arrOfChars: ["a"], expected: "" },
    { arrOfChars: ["a", "c"], expected: "b" },
    { arrOfChars: ["a", "b", "c"], expected: "" },
    { arrOfChars: ["A", "B", "C", "E"], expected: "D" },
    { arrOfChars: ["A", "B", "C", "D", "E", "F", "G"], expected: "" },
    { arrOfChars: ["C", "D", "E", "G"], expected: "F" },
  ])(
    "findMissingLetterV5($arrOfChars) is equal to: $expected",
    ({ arrOfChars, expected }) => {
      expect(findMissingLetterV5(arrOfChars)).toBe(expected);
    },
  );
});
