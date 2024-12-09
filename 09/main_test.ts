import { assertEquals } from "@std/assert";
const { part1, part2 } = await import(`${import.meta.dirname}/main.ts`)

const exampleInput1 = "2333133121414131402"

const exampleInput2 = ""

Deno.test(function part1Test() {
  assertEquals(part1(exampleInput1), 1928);
});

Deno.test(function part2Test() {
  assertEquals(part2(exampleInput2), 0);
});
