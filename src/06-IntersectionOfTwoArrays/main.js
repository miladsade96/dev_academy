function intersectionV1(arr1, arr2) {
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

function intersectionV2(arr1, arr2) {
  const uniqueArr1 = [...new Set(arr1)];
  const set2 = new Set(arr2);
  return uniqueArr1.filter((el) => set2.has(el));
}

module.exports = { intersectionV1, intersectionV2 };
