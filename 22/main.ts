export function part1(input: Array<bigint>) {
  let ans = 0n

  for (const i of input) {
    let tmp = i 
    for (let l = 0; l < 2000; l++) {
      tmp = calc(tmp)
    }
    ans += tmp
  }

  return Number(ans)
}

function calc(b: bigint) {
  // step 1
  const f1 = b * 64n
  const f2 = b ^ f1
  const f4 = f2 % 16777216n

  // step 2
  const s1 = f4 / 32n
  const s2 = s1 ^ f4
  const s3 = s2 % 16777216n

  // step 3
  const t1 = s3 * 2048n
  const t2 = t1 ^ s3
  const t3 = t2 % 16777216n

  return t3
}

export function part2(input: Array<string>) {

}

function parseInput(input: string): Array<bigint> {
  return input.trim().split(/\n/).map(BigInt)
}

const rawInput = await Deno.readTextFile(`${import.meta.dirname}/input.txt`)
const input = parseInput(rawInput)

console.log(part1(input))
//console.log(part2(input))
