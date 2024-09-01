export function groupAnagramsV1(strs) {
  const storage = {};
  for (const word of strs) {
    const sortedChars = word.split("").sort().join("");
    if (storage[sortedChars]) storage[sortedChars].push(word);
    else storage[sortedChars] = [word];
  }
  return Array.from(Object.values(storage));
}

export function groupAnagramsV2(strs) {
  const storage = new Map();
  for (const word of strs) {
    const sortedChars = word.split("").sort().join("");
    if (storage.has(sortedChars)) storage.get(sortedChars).push(word);
    else storage.set(sortedChars, [word]);
  }
  return Array.from(storage.values());
}
