import { assertEquals } from "@std/assert";
const { part1, part2 } = await import(`${import.meta.dirname}/main.ts`)

const exampleInput1 = [
  1n,
  10n,
  100n,
  2024n,
]

const exampleInput2 = [
  0
]

Deno.test(function part1Test() {
  assertEquals(part1(exampleInput1), 37327623);
});

Deno.test(function part2Test() {
  assertEquals(part2(exampleInput2), 0);
});
