export function power(base, exponent) {
  /* Solution #1 - Using recursion:
   *
   * Time complexity: O(exponent)
   * Space complexity: O(exponent)
   */
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}
