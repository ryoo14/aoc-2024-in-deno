import { assertEquals } from "@std/assert";
const { part1, part2 } = await import(`${import.meta.dirname}/main.ts`)

const exampleInput = [
  "....#.....",
  ".........#",
  "..........",
  "..#.......",
  ".......#..",
  "..........",
  ".#..^.....",
  "........#.",
  "#.........",
  "......#...",
]

Deno.test(function part1Test() {
  assertEquals(part1(exampleInput), 41);
});

Deno.test(function part2Test() {
  assertEquals(part2(exampleInput), 0);
});
