import { it, expect } from "vitest";
import fizzbuzz from "./fizzbuzz";

it("should display 'fizz' if divisible by 3", () => {
  expect(fizzbuzz(6)).toBe("fizz");
  expect(fizzbuzz(2)).toBe("2");
  expect(fizzbuzz(14)).toBe("14");
  expect(fizzbuzz(18)).toBe("fizz");
});
