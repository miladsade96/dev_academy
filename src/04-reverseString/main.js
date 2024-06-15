export function reverseStringV1(str) {
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

export function reverseStringV2(str) {
  /* Solution #2 - Using array:
   *
   * Time complexity: O(n)
   * Space complexity: O(n)
   */
  return str.split("").reverse().join("");
}

export function reverseStringV3(str) {
  /* Solution #3 - Using recursion:
   *
   * Time complexity: O(n)
   * Space complexity: O(n)
   */
  if (str === "") {
    return "";
  }
  return reverseStringV3(str.substring(1)) + str.charAt(0);
}
