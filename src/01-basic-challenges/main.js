/*
  Instructions:
  Write a function called `countOccurrences()` that takes in a string and a character and returns the number of
  occurrences of that character in the string.

 
 * Returns the number of occurrences of a character in a string.
 * @param {string} totalString - The string to search.
 * @param {string} desiredChar - The character to search for.
 * @returns {number} - The number of occurrences of the character in the string.

 countOccurrences('hello', 'l'); // 2
 countOccurrences('hello', 'z'); // 0

 Lowercase and uppercase characters are considered different characters.
 */

function countOccurrencesV1(totalString, desiredChar) {
  // Using for of loop
  let count = 0;
  for (const element of totalString) {
    if (element === desiredChar) count++;
  }
  return count;
}

function countOccurrencesV2(totalString, desiredChar) {
  // Using split method
  return totalString.split(desiredChar).length - 1;
}

function countOccurrencesV3(totalString, desiredChar) {
  // Using filter method
  return [...totalString].filter((char) => char === desiredChar).length;
}

module.exports = {
  countOccurrencesV1,
  countOccurrencesV2,
  countOccurrencesV3,
};
