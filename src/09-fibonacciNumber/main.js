export function fibonacciNumberV1(number) {
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

export function fibonacciNumberV2(number) {
  /* Solution #2 - Using for loop:
   *
   * Time complexity: O(n)
   * Space complexity: O(1)
   */
  if (number < 2) {
    return number;
  }

  let prev = 0,
    curr = 1,
    next;

  for (let i = 2; i <= number; i++) {
    next = prev + curr;
    prev = curr;
    curr = next;
  }
  return next;
}
