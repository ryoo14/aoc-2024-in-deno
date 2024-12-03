export function part1(input: Array<string>) {
  const regexp = /mul\((\d{1,3}),(\d{1,3})\)/g
  let ans = 0
  for (const i of input) {
    ans += Array.from(i.matchAll(regexp), (m) => Number(m[1]) * Number(m[2])).reduce((c, v) => c + v)
  }
  return ans
}

export function part2(input: Array<string>) {
  const regexp = /mul\((\d{1,3}),(\d{1,3})\)|do\(\)|don't\(\)/g
  let ans = 0
  const ls = Array.from(input.join("").matchAll(regexp), m => m[0].slice(0,1) === "m" ? Number(m[1]) * Number(m[2]) : m[0])
  let flag = true
  for (const l of ls) {
    if (l === "do()") {
      flag = true
      continue
    } else if (l === "don't()") {
      flag = false
      continue
    } else {
      if (flag) {
        ans += l as number
      } else {
        continue
      }
    }
  }
  return ans
}

function parseInput(input: string): Array<string> {
  return input.trim().split(/\n/)
}

 const rawInput = await Deno.readTextFile(`${import.meta.dirname}/input.txt`)
 const input = parseInput(rawInput)

 console.log(part1(input))
 console.log(part2(input))
