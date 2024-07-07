export function flattenArray(arr) {
  /*
   * Approach: Using recursion
   *
   * Time complexity: O(number of integers) + O(number of nested arrays)
   * Space complexity: O(number of integers in flattened arrays)
   */
  let result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}
