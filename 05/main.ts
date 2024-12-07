export function part1(input: Array<string>) {
  const [firstRaw, secondRaw] = input.join("-").split("--").map(l => l.split("-"))
  const first = firstRaw.map(f => f.split("|").map(ff => Number(ff)))
  const second = secondRaw.map(s => s.split(",").map(ss => Number(ss)))
  let ans = 0

  for (const s of second) {
    let flag
    for (let i = 0; i < s.length; i++) {
      const y = first.filter(([_, num2]) => num2 === s[i])
                     .map(([num1, _]) => num1)
      const z = s.slice(i, s.length)
      flag = y.some(yv => (new Set(z)).has(yv))

      if (flag) {
        break
      }
    }
    if (! flag) {
      ans += s[(s.length - 1) / 2]
    }
  }

  return ans
}

export function part2(input: Array<string>) {
  const [firstRaw, secondRaw] = input.join("-").split("--").map(l => l.split("-"))
  const first = firstRaw.map(f => f.split("|").map(ff => Number(ff)))
  const second = secondRaw.map(s => s.split(",").map(ss => Number(ss)))
  const secondInvalid: Array<Array<number>> = []
  let ans = 0

  for (const s of second) {
    let flag
    for (let i = 0; i < s.length; i++) {
      const y = first.filter(([_, num2]) => num2 === s[i])
                     .map(([num1, _]) => num1)
      const z = s.slice(i, s.length)
      flag = y.some(yv => (new Set(z)).has(yv))

      if (flag) {
        secondInvalid.push(s)
        break
      }
    }
  }

  for (const s of secondInvalid) {
    const sv = []
    while (1) {
      let flag
      for (let i = 0; i < s.length; i++) {
        const y = first.filter(([_, num2]) => num2 === s[i])
                       .map(([num1, _]) => num1)
        const z = s.slice(i, s.length)
        flag = y.some(yv => (new Set(z)).has(yv))

        if (! flag) {
          sv.push(s[i])
          s.splice(i, 1)
          break
        }
      }

      if (s.length === 1) {
          sv.push(s[0])
          ans += sv[(sv.length - 1) / 2]
          break
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
