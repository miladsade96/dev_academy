export function countOccurrencesV1(totalString, desiredChar) {
  // Using for of loop
  let count = 0;
  for (const element of totalString) {
    if (element === desiredChar) count++;
  }
  return count;
}

export function countOccurrencesV2(totalString, desiredChar) {
  // Using split method
  return totalString.split(desiredChar).length - 1;
}

export function countOccurrencesV3(totalString, desiredChar) {
  // Using filter method
  return [...totalString].filter((char) => char === desiredChar).length;
}
