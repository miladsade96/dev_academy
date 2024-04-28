function isPalindromeV1(str) {
  /*
   * Solution #1 - Using Arrays:
   * Time complexity: O(n)
   * Space Complexity: O(n)
   */
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return formattedStr === formattedStr.split("").reverse().join("");
}

//----------------------------------------------------------------------------------------------------------------------
