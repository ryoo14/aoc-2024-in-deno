export function part1(l: Array<string>) {
  const s = new Set<string>()
  for (let i = 0; i < l.length - 1; i++) {
    for (let h = i + 1; h < l.length; h++) {
      const il = l[i].split("-")
      const hl = l[h].split("-")
      if (il[0] === hl[0]) {
        if (l.includes(il[1] + "-" + hl[1]) || l.includes(hl[1] + "-" + il[1])) {
          const li = il.concat(hl).sort()
          const tmp = new Set(li)
          s.add([...tmp].join(","))
        }
      } else if (il[0] === hl[1]) {
        if (l.includes(il[1] + "-" + hl[0]) || l.includes(hl[0] + "-" + il[1])) {
          const li = il.concat(hl).sort()
          const tmp = new Set(li)
          s.add([...tmp].join(","))
        }
      } else if (il[1] === hl[0]) {
        if (l.includes(il[0] + "-" + hl[1]) || l.includes(hl[1] + "-" + il[0])) {
          const li = il.concat(hl).sort()
          const tmp = new Set(li)
          s.add([...tmp].join(","))
        }
      } else if (il[1] === hl[1]) {
        if (l.includes(il[0] + "-" + hl[0]) || l.includes(hl[0] + "-" + il[0])) {
          const li = il.concat(hl).sort()
          const tmp = new Set(li)
          s.add([...tmp].join(","))
        }
      }
    }
  }
  let ans = 0
  for (const v of s.values()) {
    if (v.match(/^t/) || v.match(/,t/)) {
      ans +=1
    }
  }

  return ans
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
