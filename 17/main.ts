export function part1(input: Array<string>) {
  const a = input[0].split(" ")[2]
  const b = input[1].split(" ")[2]
  const c = input[2].split(" ")[2]
  const m = new Map()
  m.set("A", BigInt(a))
  m.set("B", BigInt(b))
  m.set("C", BigInt(c))

  const l: bigint[] = []
  const n: bigint[] = []
  const s: number[] = []
  input[4].split(" ")[1].split(",").forEach((cv, ci) => ci % 2 === 0 ? l.push(BigInt(cv)) : n.push(BigInt(cv)))

  for (let i = 0; i < l.length; i++) {
    const r = hoge(n[i], m)
    if (l[i] === 0n) {
      const t = adv(m.get("A"), r)
      m.set("A", t)
    } else if (l[i] === 1n) {
      const t = bxl(m.get("B"), n[i])
      m.set("B", t)
    } else if (l[i] === 2n) {
      const t = bst(r)
      m.set("B", t)
    } else if (l[i] === 3n) {
      if (m.get("A") === 0n) {
        continue
      } else {
        i = Number(n[i]) - 1
      }
    } else if (l[i] === 4n) {
      const t = bxc(m)
      m.set("B", t)
    } else if (l[i] === 5n) {
      const t = out(r)
      s.push(t)
    } else if (l[i] === 6n) {
      const t = adv(m.get("A"), r)
      m.set("B", t)
    } else if (l[i] === 7n) {
      const t = adv(m.get("A"), r)
      m.set("C", t)
    }
  }
  return s.join(",")
}


function adv(a: bigint, b: bigint): bigint {
  return BigInt(Math.trunc(Number(a / (2n ** b))))
}
function bxl(a: bigint, b: bigint): bigint {
  return a ^ b
}
function bst(a: bigint): bigint {
  const t = a % 8n
  return t
}
function bxc(m: Map<string, bigint>): bigint {
  return m.get("B")! ^ m.get("C")!
}
function out(a: bigint) {
  return Number(a % 8n)

}

function hoge(a: bigint, m: Map<string, bigint>): bigint {
  let r = 0n
  if (a === 4n) {
    r = m.get("A")!
  } else if (a === 5n) {
    r = m.get("B")!
  } else if (a === 6n) {
    r = m.get("C")!
  } else {
    r = a
  }

  return r
}
export function part2(input: Array<string>) {

}

function parseInput(input: string): Array<string> {
  return input.trim().split(/\n/)
}

const rawInput = await Deno.readTextFile(`${import.meta.dirname}/input.txt`)
const input = parseInput(rawInput)

console.log(part1(input))
//console.log(part2(input))
