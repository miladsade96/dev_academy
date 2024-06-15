export function titleCaseV1(str) {
  /* Solution #1 - Using for loop
   *
   * Time complexity: O(n)
   * Space complexity: O(n)
   */
  const words = str.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

export function titleCaseV2(str) {
  /* Solution #2 - Using map method
   *
   * Time complexity: O(n)
   * Space complexity: O(n) + O(n) = O(n)
   */
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(" ");
}

export function titleCaseV3(str) {
  /* Solution #3 - using regex
   *
   * Time complexity: ?
   * Space complexity: ?
   * Time and space complexity of regex is hard to calculate due to internal implementation of regex.
   * Please read this article for more details: https://swtch.com/~rsc/regexp/regexp1.html
   */
  return str.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase());
}
