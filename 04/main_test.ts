import { assertEquals } from "@std/assert";
const { part1, part2 } = await import(`${import.meta.dirname}/main.ts`)

const exampleInput = [
  'MMMSXXMASM',
  'MSAMXMSMSA',
  'AMXSXMAAMM',
  'MSAMASMSMX',
  'XMASAMXAMM',
  'XXAMMXXAMA',
  'SMSMSASXSS',
  'SAXAMASAAA',
  'MAMMMXMMMM',
  'MXMXAXMASX',
]

//const exampleInput = [
//  "..X...",
//  ".SAMX.",
//  ".A..A.",
//  "XMAS.S",
//  ".X....",
//]
//

const exampleInput2 = [
  ".M.S......",
  "..A..MSMS.",
  ".M.S.MAA..",
  "..A.ASMSM.",
  ".M.S.M....",
  "..........",
  "S.S.S.S.S.",
  ".A.A.A.A..",
  "M.M.M.M.M.",
  "..........",
]


Deno.test(function part1Test() {
  assertEquals(part1(exampleInput), 18);
});

Deno.test(function part2Test() {
  assertEquals(part2(exampleInput2), 9);
});
