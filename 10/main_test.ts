import { assertEquals } from "@std/assert";
const { part1, part2 } = await import(`${import.meta.dirname}/main.ts`)

const exampleInput1 = [
  "89010123",
  "78121874",
  "87430965",
  "96549874",
  "45678903",
  "32019012",
  "01329801",
  "10456732",
]

const exampleInput2 = [
  0
]

Deno.test(function part1Test() {
  assertEquals(part1(exampleInput1), 36);
});

Deno.test(function part2Test() {
  assertEquals(part2(exampleInput2), 0);
});
