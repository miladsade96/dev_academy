import { groupAnagramsV1, groupAnagramsV2 } from "./main.js";
import { describe, it, expect } from "vitest";

function transformer(arr) {
  return arr.map((innerArr) => innerArr.join(""));
}

describe("GroupAnagrams", () => {
  it.each([
    { strs: [""], result: [[""]] },
    { strs: ["a"], result: [["a"]] },
    {
      strs: ["eat", "tea", "ate", "nat", "tan", "bat"],
      result: [["eat", "tea", "ate"], ["nat", "tan"], ["bat"]],
    },
  ])(
    "It should return $result for groupAnagramsV1($strs)",
    ({ strs, result }) => {
      const transformedGroupAnagramsV1 = transformer(groupAnagramsV1(strs));
      const transformedResult = transformer(result);
      expect(transformedGroupAnagramsV1).toMatchObject(transformedResult);
    },
  );

  it.each([
    { strs: [""], result: [[""]] },
    { strs: ["a"], result: [["a"]] },
    {
      strs: ["eat", "tea", "ate", "nat", "tan", "bat"],
      result: [["eat", "tea", "ate"], ["nat", "tan"], ["bat"]],
    },
  ])(
    "It should return $result for groupAnagramsV2($strs)",
    ({ strs, result }) => {
      const transformedGroupAnagramsV1 = transformer(groupAnagramsV2(strs));
      const transformedResult = transformer(result);
      expect(transformedGroupAnagramsV1).toMatchObject(transformedResult);
    },
  );
});
