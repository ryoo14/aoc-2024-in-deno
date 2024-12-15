export function part1(input: Array<string>) {
  const quizs = []
  let l = []
  let cnt = 0
  for (let i = 0; i < input.length; i++) {
    const s = input[i]
    if (cnt === 0) {
      const r = s.match(/Button A: X\+([0-9][0-9]), Y\+([0-9][0-9])/) || []
      l.push(Number(r[1]), Number(r[2]))
      cnt++
    } else if (cnt === 1) {
      const r = s.match(/Button B: X\+([0-9][0-9]), Y\+([0-9][0-9])/) || []
      l.push(Number(r[1]), Number(r[2]))
      cnt++
    } else if (cnt === 2) {
      const r = s.match(/Prize: X=([0-9]+), Y=([0-9]+)/) || []
      l.push(Number(r[1]), Number(r[2]))
      quizs.push(l)
      cnt++
    } else {
      l = []
      cnt = 0
    }
  }

  const ans = []
  for (const q of quizs) {
    let max = 201
    let im = 100
    let mm = 100
    for (let i = 1; i < 100; i++) {
      for (let m = 1; m < 100; m++) {
        const x = q[0]*i + q[2]*m
        const y = q[1]*i + q[3]*m
        if (x === q[4] && y === q[5]) {
          if (i + m < max) {
            max = i + m
            im = i
            mm = m
          }
        }
      }
    }
    if (max === 201) {
      ans.push(0)
    } else {
      ans.push(im*3 + mm)
    }
  }

  return ans.reduce((p, c) => p + c, 0)
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
