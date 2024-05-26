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

function findMissingLetterV2(arrOfChars) {}

module.exports = { findMissingLetterV1, findMissingLetterV2 };
