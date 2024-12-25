import { assertEquals } from "@std/assert";
const { part1, part2 } = await import(`${import.meta.dirname}/main.ts`)

const exampleInput1 = [
  "r, wr, b, g, bwu, rb, gb, br",
  "",
  "brwrr",
  "bggr",
  "gbbr",
  "rrbgbr",
  "ubwu",
  "bwurrg",
  "brgr",
  "bbrgwb",
]

const exampleInput2 = [
  ""
]

Deno.test(function part1Test() {
  assertEquals(part1(exampleInput1), 6);
});

Deno.test(function part2Test() {
  assertEquals(part2(exampleInput2), 0);
});
