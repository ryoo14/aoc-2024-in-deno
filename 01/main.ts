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

let ans = 0

for (let i = 0; i < lines.length - 1; i++) {
  ans += Math.abs(al[i] - bl[i])
}

console.log(ans)
