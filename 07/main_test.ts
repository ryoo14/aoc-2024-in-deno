import { assertEquals } from "@std/assert";
const { part1, part2 } = await import(`${import.meta.dirname}/main.ts`)

const exampleInput = [
  "190: 10 19",
  "3267: 81 40 27",
  "83: 17 5",
  "156: 15 6",
  "7290: 6 8 6 15",
  "161011: 16 10 13",
  "192: 17 8 14",
  "21037: 9 7 18 13",
  "292: 11 6 16 20",
]

Deno.test(function part1Test() {
  assertEquals(part1(exampleInput), 3749);
});

Deno.test(function part2Test() {
  assertEquals(part2(exampleInput), 0);
});
