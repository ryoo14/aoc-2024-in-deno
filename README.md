# aoc-2024-in-deno

## Run

```
$ deno run r <Day>
$ deno run r 01(or 02, 03...etc)
```

## Test

```
$ deno run t <Day>
$ deno run t 01(or 02, 03...etc)
```

## Template

### for main.ts

```typescript
export function part1(input: Array<string>) {
   
}

export function part2(input: Array<string>) {

}

function parseInput(input: string): Array<string> {
  return input.trim().split(/\n/)
}

 const rawInput = await Deno.readTextFile(`${import.meta.dirname}/input.txt`)
 const input = parseInput(rawInput)

 console.log(part1(input))
 console.log(part2(input))
```

### for main_test.ts

```typescript
import { assertEquals } from "@std/assert";
const { part1, part2 } = await import(`${import.meta.dirname}/main.ts`)

const exampleInput = [
   
]

Deno.test(function part1Test() {
  assertEquals(part1(exampleInput), x);
});

Deno.test(function part2Test() {
  assertEquals(part2(exampleInput), x);
});
```
