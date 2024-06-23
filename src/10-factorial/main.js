export function factorial(num) {
  /* Solution #1 - Using recursion:
   *
   * Time complexity: O(n)
   * Space complexity: O(n)
   */
  if (num < 2) {
    return 1;
  }
  return num * factorial(num - 1);
}
