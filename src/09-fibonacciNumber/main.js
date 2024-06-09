function fibonacciNumberV1(number) {
  /* Solution #1 - Using recursion:
   *
   * Time complexity: O(2^n)
   * Space complexity: O(n)
   */
  if (number < 2) {
    return number;
  }
  return fibonacciNumberV1(number - 1) + fibonacciNumberV1(number - 2);
}

