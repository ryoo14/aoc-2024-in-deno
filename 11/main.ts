export function part1(input: Array<string>) {
  let ls = input
  for (let i = 0; i < 25; i++) {
    ls = blinkStones(ls)
  }
  return ls.length
}

export function part2(input: Array<string>) {

}

function parseInput(input: string): Array<string> {
  return input.trim().split(" ")
}

function blinkStones(input: Array<string>): Array<string> {
  const ls = []
  for (const i of input) {
    if (i === "0") {
      ls.push("1")
    } else if (i.length % 2 === 1) {
      ls.push((Number(i) * 2024).toString())
    } else {
      const a = i.slice(0, i.length / 2)
      const b = i.slice(i.length / 2)
      ls.push(Number(a).toString(), Number(b).toString())
    }
  }

  return ls
}

const rawInput = await Deno.readTextFile(`${import.meta.dirname}/input.txt`)
const input = parseInput(rawInput)

console.log(part1(input))
//console.log(part2(input))
