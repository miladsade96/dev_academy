export function repeatedCharacter(str) {
  /*
   * Approach: Using hash tables
   *
   * Time complexity: O(n)
   *
   * Space complexity: O(n)
   */
  const store = {};
  for (let i = 0; i < str.length; i++) {
    if (store[str[i]]) return str[i];
    else store[str[i]] = true;
  }
}
