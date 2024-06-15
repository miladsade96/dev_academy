export function intersectionV1(arr1, arr2) {
  /*
   * Approach #1: Comparing two unique arrays
   *
   * Time Complexity: O(n * m) or O(n^2)
   * Space Complexity; O(n)
   */

  const uniqueArr1 = [...new Set(arr1)];
  const uniqueArr2 = [...new Set(arr2)];
  const intersectionArr = [];
  if (uniqueArr1.length <= uniqueArr2.length) {
    for (const element of uniqueArr1) {
      if (uniqueArr2.includes(element)) intersectionArr.push(element);
    }
  } else {
    for (const element of uniqueArr2) {
      if (uniqueArr1.includes(element)) intersectionArr.push(element);
    }
  }
  return intersectionArr;
}

export function intersectionV2(arr1, arr2) {
  /*
   * Approach #2 - Solution #1: Comparing a unique array to a set
   *
   * Time Complexity: O(n * 1) or O(n)
   * Space Complexity; O(n)
   */

  const uniqueArr1 = [...new Set(arr1)];
  const set2 = new Set(arr2);
  return uniqueArr1.filter((el) => set2.has(el));
}

export function intersectionV3(arr1, arr2) {
  /*
   * Approach #2 - Solution #2: Comparing two sets
   *
   * Time Complexity: O(n * 1) or O(n)
   * Space Complexity; O(n)
   */

  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const intersectionArr = [];

  if (set1.size <= set2.size) {
    for (const element of set1) {
      if (set2.has(element)) intersectionArr.push(element);
    }
  } else {
    for (const element of set2) {
      if (set1.has(element)) intersectionArr.push(element);
    }
  }

  return intersectionArr;
}
