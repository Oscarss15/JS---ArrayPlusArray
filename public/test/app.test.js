import { describe, it, expect } from "vitest";

import { sumaArrays } from "../js/app.js";
import { reset } from "../js/app.js";

describe("sumaArrays", () => {
  it("should be expected 21", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const result = sumaArrays(arr1, arr2);
    expect(result).toBe(21);
    reset();
  });
  it("should be expected -21", () => {
    const arr1 = [-1, -2, -3];
    const arr2 = [-4, -5, -6];
    const result = sumaArrays(arr1, arr2);
    expect(result).toBe(-21);
    reset();
  });
  it("should be expected 15", () => {
    const arr1 = [0, 0, 0];
    const arr2 = [4, 5, 6];
    const result = sumaArrays(arr1, arr2);
    expect(result).toBe(15);
    reset();
  });
  it("should be expected 2100", () => {
    const arr1 = [100, 200, 300];
    const arr2 = [400, 500, 600];
    const result = sumaArrays(arr1, arr2);
    expect(result).toBe(2100);
    reset();
  });
});
