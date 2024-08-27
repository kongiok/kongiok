import { it, describe, expect } from "vitest";

describe("Dummy Test", () => {
  it("should Pass", () => {
    expect(1).toBe(1);
  });
  describe("Given 1 + 2", () => {
    it("should be 3", () => {
      expect(1 + 2).toBe(3);
    });
  });
});
