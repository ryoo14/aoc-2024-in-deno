//const text = await Deno.readTextFile("02/example.txt")
const text = await Deno.readTextFile("02/input.txt")
const lines = text.trim().split(/\n/)
let ans = 0

for (const line of lines) {
  const l = line.split(" ").map(n => Number(n))
  let s = ""
  for (let i = 0; i < l.length - 1; i++) {
    if (l[i] === l[i+1] || 3 < Math.abs(l[i] - l[i+1])) {
      break
    }

    if (i === 0) {
      if (l[i] < l[i+1]) {
        s = "inc"
      } else {
        s = "dec"
      }
    } else {
      if (s === "inc") {
        if (l[i] > l[i+1]) {
          break
        }
      } else if (s === "dec") {
        if (l[i] < l[i+1]) {
          break
        }
      }
    }

    if (i === l.length - 2) {
      ans += 1
    }
  }
}

console.log(ans)
