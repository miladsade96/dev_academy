export function permutations(str) {
  /*
   * Approach: Using recursion and backtracking
   *
   * Time complexity: O(n * n!) where:
   *
   *    n: number of recursive calls
   *    n!: number of calculated permutations
   *
   * Space complexity: O(n * n!) where:
   *
   *    n: number of recursive frames in the call stack
   *    n!: size of the final result array
   */
  const result = [];

  if (str.length === 2) {
    result.push(str, `${str[1]}${str[0]}`);
    return result;
  }

  for (let i = 0; i < str.length; i++) {
    const firstLetter = str[i];

    const restOfString = str.slice(0, i) + str.slice(i + 1);

    const subPermutations = permutations(restOfString);

    for (let j = 0; j < subPermutations.length; j++) {
      result.push(firstLetter + subPermutations[j]);
    }
  }

  return result;
}
