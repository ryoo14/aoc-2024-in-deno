export function part1(input: Array<string>) {
  let flag = false
  const towels: string[] = []
  const q: string[] = []
  for (const i of input) {
    if (i === "") {
      flag = true
      continue
    }
    if (flag) {
      q.push(i)
    } else {
      i.split(", ").forEach(v => towels.push(v))
    }
  }

  let ans = 0
  for (const qv of q) {
    if (sousa(qv, towels)) {
      ans += 1
    }
  }

  return ans
}

function sousa(s: string, ws: Array<string>) {
  for (const w of ws) {
    const r = new RegExp(`^${w}`)
    if (s.match(r)) {
      const ss = s.slice(w.length, s.length)
      if (ss.length === 0) {
        return true
      } else if (sousa(ss, ws)) {
        return true
      }
    }
  }
  return false
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
