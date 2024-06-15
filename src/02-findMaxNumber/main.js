export function findMaxNumberV1(arrOfNums) {
  // Using built-in methods:
  const noDuplicates = [...new Set(arrOfNums)];
  return Math.max(...noDuplicates);
}

export function findMaxNumberV2(arrOfNums) {
  // Using for loop - original:
  let maxNum = arrOfNums[0];
  for (let i = 1; i < arrOfNums.length; i++) {
    if (maxNum < arrOfNums[i]) maxNum = arrOfNums[i];
  }
  return maxNum;
}

export function findMaxNumberV3(arrOfNums) {
  // Using for loop and -infinity:
  let maxNum = Number.NEGATIVE_INFINITY;
  for (const element of arrOfNums) {
    if (maxNum < element) {
      maxNum = element;
    }
  }
  return maxNum;
}
