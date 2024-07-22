export function flatV1(arr, n) {
  /*
   * Approach #1: Using concat() method - Cause `Time Limit Exceeded` Error on LeetCode
   *
   * Time complexity: O(m * n * k) where:
   *
   *    m: total number of elements
   *    n: maximum flatten depth
   *    k: average number of elements being concatenated in each recursive call
   *
   * Space complexity: O(m + n) where:
   *
   *    m: total number of elements in the final flattened array
   *    n: maximum recursive depth
   */

  let result = [];

  for (const item of arr) {
    if (Array.isArray(item) && n > 0) {
      result = result.concat(flatV1(item, n - 1));
    } else {
      result.push(item);
    }
  }

  return result;
}

export function flatV2(arr, n) {
  /*
   * Approach #2: Using push() method and spread operator
   *
   * Time complexity: O(m * n * k) where:
   *
   *    m: total number of elements
   *    n: maximum flatten depth
   *    k: complexity of the spread operator
   *
   * Space complexity: O(m + n ) where:
   *
   *    m: total number of elements in the final flattened array
   *    n: maximum recursive depth
   */

  let result = [];

  for (const item of arr) {
    if (Array.isArray(item) && n > 0) {
      result.push(...flatV1(item, n - 1));
    } else {
      result.push(item);
    }
  }

  return result;
}
