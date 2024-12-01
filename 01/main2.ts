const text = await Deno.readTextFile("./01/input.txt")
const lines = text.split(/\n/)
const al: number[] = []
const bl: number[] = []

for (const line of lines) {
  if (line === lines[lines.length-1]) {
    break
  }
  const [av, bv] = line.split(/\s+/).map(s => Number(s.trim()))
  al.push(av)
  bl.push(bv)
}

al.sort((a, b) => a - b)
bl.sort((a, b) => a - b)

const m = new Map()

for (let i = 0; i < lines.length - 1; i++) {
  if (bl.includes(al[i])) {
    const bs = bl.filter(bv => bv === al[i]).length
    if (m.has(al[i])) {
      m.set(al[i], m.get(al[i]) + bs)
    } else {
      m.set(al[i], bs)
    }
  }
}

let ans = 0

for (const [k, v] of m.entries()) {
  ans += k * v
}

console.log(ans)
