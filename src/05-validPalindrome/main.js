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

function isAlphanumericV1(char) {
  /*
   * This is the helper function #1 - powered by regex
   * Time complexity: O(1)
   * Space complexity: O(1)
   */
  return /^[a-z0-9]$/i.test(char);
}

function isAlphanumericV2(char) {
  /*
   * This is the helper function #2 - powered by hash tables
   * Time complexity: Lookup in hash tables is O(1) and O(n) when collision is occurred
   * Space complexity: O(1)
   */
  const alphaNumericObj = {
    a: true,
    b: true,
    c: true,
    d: true,
    e: true,
    f: true,
    g: true,
    h: true,
    i: true,
    j: true,
    k: true,
    l: true,
    m: true,
    n: true,
    o: true,
    p: true,
    q: true,
    r: true,
    s: true,
    t: true,
    u: true,
    v: true,
    w: true,
    x: true,
    y: true,
    z: true,
    A: true,
    B: true,
    C: true,
    D: true,
    E: true,
    F: true,
    G: true,
    H: true,
    I: true,
    J: true,
    K: true,
    L: true,
    M: true,
    N: true,
    O: true,
    P: true,
    Q: true,
    R: true,
    S: true,
    T: true,
    U: true,
    V: true,
    W: true,
    X: true,
    Y: true,
    Z: true,
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
  };
  return alphaNumericObj[char] || false;
}

function isAlphanumericV3(char) {
  /*
   * This is the helper function #3 - powered by ASCII table codes
   * Time complexity: O(1)
   * Space complexity: O(1)
   */
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || // 0 - 9
    (code >= 65 && code <= 90) || // A - Z
    (code >= 97 && code <= 122) // a - z
  );
}
