function findMissingLetterV1(arrOfChars) {
  /*
   * Approach #1: Using a reference string
   *
   * Time Complexity: O(n)
   * Space Complexity; O(1)
   */

  const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const startIndex = alphabets.indexOf(arrOfChars.at(0));
  for (let i = 1; i < arrOfChars.length; i++) {
    if (arrOfChars.at(i) !== alphabets.at(startIndex + i)) {
      return alphabets.at(startIndex + i);
    }
  }
  return "";
}

function findMissingLetterV2(arrOfChars) {
  /*
   * Approach #1: Using character codes (UTF-16)
   *
   * Time Complexity: O(n)
   * Space Complexity; O(1)
   */

  if (arrOfChars.length === 0) return "";
  let startCode = arrOfChars.at(0).charCodeAt(0);
  for (let i = 1; i < arrOfChars.length; i++) {
    const currentCode = arrOfChars.at(i).charCodeAt(0);
    if (currentCode - startCode > 1) {
      return String.fromCharCode(startCode + 1);
    }
    startCode = currentCode;
  }
  return "";
}

module.exports = { findMissingLetterV1, findMissingLetterV2 };
function findMissingLetterV3(arrOfChars) {
  if (arrOfChars.length === 0) return "";
  let start = arrOfChars[0].charCodeAt(0);
  const missingCharCode = arrOfChars
    .slice(1)
    .map((char) => char.charCodeAt(0))
    .find((current) => {
      if (current - start > 1) return true;
      start = current;
      return false;
    });
  return missingCharCode ? String.fromCharCode(missingCharCode - 1) : "";
}

