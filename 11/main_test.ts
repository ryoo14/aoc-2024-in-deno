import { assertEquals } from "@std/assert";
const { part1, part2 } = await import(`${import.meta.dirname}/main.ts`)

const exampleInput1 = [
  "125","17" 
]

const exampleInput2 = [
  ""
]

Deno.test(function part1Test() {
  assertEquals(part1(exampleInput1), 55312);
});

Deno.test(function part2Test() {
  assertEquals(part2(exampleInput2), 0);
});
