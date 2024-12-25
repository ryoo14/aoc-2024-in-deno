import { assertEquals } from "@std/assert";
const { part1, part2 } = await import(`${import.meta.dirname}/main.ts`)

const exampleInput1 = [
  "aq-cg",
  "cg-tb",
  "co-tc",
  "de-cg",
  "de-co",
  "de-ta",
  "ka-co",
  "ka-de",
  "kh-ta",
  "kh-tc",
  "kh-ub",
  "qp-kh",
  "qp-ub",
  "ta-co",
  "ta-ka",
  "tb-ka",
  "tb-vc",
  "tb-wq",
  "tc-td",
  "td-qp",
  "td-yn",
  "ub-vc",
  "vc-aq",
  "wh-qp",
  "wh-tc",
  "wh-td",
  "wh-yn",
  "wq-aq",
  "wq-ub",
  "wq-vc",
  "yn-aq",
  "yn-cg",
]

const exampleInput2 = [
  ""
]

Deno.test(function part1Test() {
  assertEquals(part1(exampleInput1), 7);
});

Deno.test(function part2Test() {
  assertEquals(part2(exampleInput2), 0);
});
