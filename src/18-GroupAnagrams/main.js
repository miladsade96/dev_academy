export function groupAnagramsV1(strs) {
  const storage = {};
  for (const word of strs) {
    const sortedChars = word.split("").sort().join("");
    if (storage[sortedChars]) storage[sortedChars].push(word);
    else storage[sortedChars] = [word];
  }
  return Array.from(Object.values(storage));
}

