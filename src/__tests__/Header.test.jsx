import { expect } from "vitest";

it('Should find the word "Header"', () => {
  const textToSearch = "Header";
  expect(textToSearch).toContain("Header");
});
