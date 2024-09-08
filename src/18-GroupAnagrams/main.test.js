import { groupAnagramsV1, groupAnagramsV2 } from "./main.js";
import { describe, it, expect } from "vitest";

function transformer(arr) {
  return arr.map((innerArr) => innerArr.join(""));
}

