export function numberRange(startNum, endNum) {
  /*
   * Approach: Using recursion
   *
   * Time complexity: O(endNum - startNum)
   * Space complexity: O(endNum - startNum)
   */
  if (startNum === endNum) {
    return [startNum];
  }

  const numbers = numberRange(startNum, endNum - 1);
  numbers.push(endNum);
  return numbers;
}
