function findMissingNumberV1(arr) {
  /*
   * Approach #1: Using Gauss Summation Formula
   *
   * Time Complexity: O(n)
   * Space Complexity; O(1)
   */

  if (arr.length === 1) {
    if (arr[0] === 0) return 1;
    else if (arr[0] === 1) return 0;
  } else {
    const actualSum = arr.reduce((acc, element) => acc + element, 0);
    const n = arr.length;
    const expectedSum = (n * (n + 1)) / 2;
    return expectedSum - actualSum;
  }
}

