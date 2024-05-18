function findMissingNumberV1(arr) {
  /*
   * Approach #1: Using Gauss Summation Formula
   *
   * Time Complexity: O(n)
   * Space Complexity; O(1)
   */

  const actualSum = arr.reduce((acc, element) => acc + element, 0);
  const n = arr.length;
  const expectedSum = (n * (n + 1)) / 2;
  return expectedSum - actualSum;
}

function findMissingNumberV2(arr) {
  /*
   * Approach #2: Using Iteration Over Sorted Array
   *
   * Time Complexity: O(n)
   * Space Complexity; O(n)
   */

  const sortedArr = arr.sort((a, b) => a - b);
  let counter = 0;
  for (const element of sortedArr) {
    if (element !== counter) return counter;
    else {
      counter++;
    }
  }
  return counter++;
}

findMissingNumberV2([3, 0, 1]);

module.exports = { findMissingNumberV1, findMissingNumberV2 };
