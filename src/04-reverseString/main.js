function reverseStringV1(str) {
  // Using for loop:
  let reverseStr = "";
  for (let index = str.length; index >= 0; index--) {
    reverseStr = reverseStr + str.charAt(index);
  }
  return reverseStr;
}

function reverseStringV2(str) {
  // Using arrays:
  return str.split("").reverse().join("");
}

function reverseStringV3(str) {
  // recursive function
  if (str.length == 0) return str;
  return (
    str.charAt(str.length - 1) + reverseStringV3(str.slice(0, str.length - 1))
  );
}

module.exports = {
  reverseStringV1,
  reverseStringV2,
  reverseStringV3,
};
