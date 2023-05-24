import { it, expect } from "vitest";
import fizzbuzz from "./fizzbuzz";

it("should display 'fizz' if divisible by 3", () => {
  expect(fizzbuzz(6)).toBe("fizz");
  expect(fizzbuzz(2)).toBe("2");
  expect(fizzbuzz(14)).toBe("14");
  expect(fizzbuzz(18)).toBe("fizz");
});

it("should display 'buzz' if divisible by 5", () => {
  expect(fizzbuzz(5)).toBe("buzz");
  expect(fizzbuzz(4)).toBe("4");
  expect(fizzbuzz(10)).toBe("buzz");
});

it("should display 'fizzbuzz' if divisible by 3 AND 5", () => {
  expect(fizzbuzz(15)).toBe("fizzbuzz");
  expect(fizzbuzz(30)).toBe("fizzbuzz");
  expect(fizzbuzz(17)).toBe("17");
});
