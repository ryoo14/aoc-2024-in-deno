import { assertEquals } from "@std/assert";
const { part1, part2 } = await import(`${import.meta.dirname}/main.ts`)

const exampleInput = [
  //"xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))" 
  "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))",
]

Deno.test(function part1Test() {
  assertEquals(part1(exampleInput), 161);
});

Deno.test(function part2Test() {
  assertEquals(part2(exampleInput), 48);
});
