import { assertEquals } from "@std/assert";
const { part1, part2 } = await import(`${import.meta.dirname}/main.ts`)

const exampleInput1 = [
  //"Register A: 729",
  "Register A: 2024",
  "Register B: 0",
  "Register C: 0",
  "",
  "Program: 0,1,5,4,3,0",
   
]

const exampleInput2 = [
  ""
]

Deno.test(function part1Test() {
  assertEquals(part1(exampleInput1), "4,6,3,5,6,3,5,2,1,0");
});

Deno.test(function part2Test() {
  assertEquals(part2(exampleInput2), 0);
});
