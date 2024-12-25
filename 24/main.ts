export function part1(input: Array<string>) {
  const m = new Map<string, number>()
  while (1) {
    const tmp = input.shift()!
    if (tmp === "") {
      break
    }
    const [k, v] = tmp.split(": ")
    m.set(k, Number(v))
  }

  const l = []
  for (const i of input) {
    const [s, r] = i.split(" -> ")
    const ss = s.split(" ")
    l.push([[ss[0], ss[2]], ss[1], r, false])
  }

  while (1) {
    if (l.length === 0) {
      break
    }
    let cnt = 0
    for (let i = 0; i < l.length; i++) {
      if (l[i][3]) {
        cnt++
        continue
      }
      if (m.has(l[i][0][0]) && m.has(l[i][0][1])) {
        l[i][3] = true
        let p = 0
        const j = m.get(l[i][0][0])!
        const k = m.get(l[i][0][1])!
        if (l[i][1] === "AND") {
          p = j && k
        } else if (l[i][1] === "OR") {
          p = j || k
        } else {
          p = j ^ k
        }
        m.set(l[i][2] as string, p)
      }
    }

    if (cnt === l.length) {
      break
    }
  }
  const g = []
  for (const kk of m.keys()) {
    if (kk.match(/^z[0-9][0-9]/)) {
      g.push(kk)
    }
  }
  let word = ""
  for (const uu of g.sort((a, b) => {
    const aa = parseInt(a.slice(1), 10)
    const bb = parseInt(b.slice(1), 10)
    return bb - aa
  })) {
    word += m.get(uu)?.toString()
  }
  return parseInt(word, 2)
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
