function reverseStringV1(str) {
  /* Solution #1 - Using for loop:
   *
   * Time complexity: O(n)
   * Space complexity: O(n) - In general, 16bits per character
   */
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

function reverseStringV2(str) {
  /* Solution #2 - Using array:
   *
   * Time complexity: O(n)
   * Space complexity: O(n)
   */
  return str.split("").reverse().join("");
}

module.exports = {
  reverseStringV1,
  reverseStringV2,
};
