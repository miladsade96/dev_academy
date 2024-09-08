export function groupAnagramsV1(strs) {
  /*
   *  Approach #1: Using object
   *
   *  Time Complexity: O(n * m * log(m))
   *  Space Complexity: O(n * m)
   */
  const storage = {};
  for (const word of strs) {
    const sortedChars = word.split("").sort().join("");
    if (storage[sortedChars]) storage[sortedChars].push(word);
    else storage[sortedChars] = [word];
  }
  return Array.from(Object.values(storage));
}

export function groupAnagramsV2(strs) {
  /*
   *  Approach #2: Using Map
   *
   *  Time Complexity: O(n * m * log(m))
   *  Space Complexity: O(n * m)
   */
  const storage = new Map();
  for (const word of strs) {
    const sortedChars = word.split("").sort().join("");
    if (storage.has(sortedChars)) storage.get(sortedChars).push(word);
    else storage.set(sortedChars, [word]);
  }
  return Array.from(storage.values());
}
