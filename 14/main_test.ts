import { assertEquals } from "@std/assert";
const { part1, part2 } = await import(`${import.meta.dirname}/main.ts`)

const exampleInput1 = [
  "p=0,4 v=3,-3",
  "p=6,3 v=-1,-3",
  "p=10,3 v=-1,2",
  "p=2,0 v=2,-1",
  "p=0,0 v=1,3",
  "p=3,0 v=-2,-2",
  "p=7,6 v=-1,-3",
  "p=3,0 v=-1,-2",
  "p=9,3 v=2,3",
  "p=7,3 v=-1,2",
  "p=2,4 v=2,-3",
  "p=9,5 v=-3,-3",
]

const exampleInput2 = [
  ""
]

Deno.test(function part1Test() {
  assertEquals(part1(exampleInput1), 12);
});

Deno.test(function part2Test() {
  assertEquals(part2(exampleInput2), 0);
});
