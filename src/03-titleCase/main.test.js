const functions = require("./main");
const { titleCaseV1, titleCaseV2, titleCaseV3 } = functions;

describe("titleCaseV1 function tests", () => {
  it.each([
    { str: "helLo wORld", expected: "Hello World" },
    { str: "mIlAd sADEghI", expected: "Milad Sadeghi" },
    { str: "wE geT wHaT wE dEsErVe", expected: "We Get What We Deserve" },
  ])("titleCaseV1($str) equals to $expected", ({ str, expected }) => {
    expect(titleCaseV1(str)).toBe(expected);
  });
});

describe("titleCaseV2 function tests", () => {
  it.each([
    { str: "heLLo wORld", expected: "Hello World" },
    { str: "mIlAd sADeGhI", expected: "Milad Sadeghi" },
    { str: "wE gET wHAT wE dEsErVe", expected: "We Get What We Deserve" },
  ])("titleCaseV2($str) equals to $expected", ({ str, expected }) => {
    expect(titleCaseV2(str)).toBe(expected);
  });
});

describe("titleCaseV3 function tests", () => {
  it.each([
    { str: "helLo wORLD", expected: "Hello World" },
    { str: "mILAD sADEghI", expected: "Milad Sadeghi" },
    { str: "wE gEt wHAt WE dEsErVE", expected: "We Get What We Deserve" },
  ])("titleCaseV1($str) equals to $expected", ({ str, expected }) => {
    expect(titleCaseV3(str)).toBe(expected);
  });
});
