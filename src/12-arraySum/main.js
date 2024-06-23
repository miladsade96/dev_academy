export function arraySum(arr) {
  /* Solution #1 - Using recursion:
   *
   * Time complexity: O(n)
   * Space complexity: O(n)
   */
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + arraySum(arr.slice(1));
}
