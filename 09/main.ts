export function part1(input: Array<string>) {
  const s = generateBlock(input)
  const dot = s.reduce((cnt, str) => {
    return cnt + (str.match(/\./)?.length || 0)
  }, 0)
  const notDot = s.length - dot

  for (let i = s.length - 1; 0 < i; i--) {
    if (notDot === s.indexOf(".")) {
      break
    }

    if (s[i] === ".") {
      continue
    } else {
      s[s.indexOf(".")] = s[i]
      s[i] = "."
    }
  }

  console.log(s.join(""))

  let ans: bigint = 0n
  for (let l = 0; l < notDot; l++) {
    ans += BigInt(l) * BigInt(s[l]) 
  }
   
  return Number(ans)
}

export function part2(input: Array<string>) {

}

function parseInput(input: string): Array<string> {
  return input.split("")
}

function generateBlock(input: Array<string>): Array<string> {
  const s: string[][] = [] 
  let n = 0
  for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0) {
      s.push(Array(Number(input[i])).fill(n.toString()))
      n++
    } else {
      s.push(Array(Number(input[i])).fill("."))
      
    }
  }

  return s.flat()
}

const rawInput = await Deno.readTextFile(`${import.meta.dirname}/input.txt`)
const input = parseInput(rawInput)

console.log(part1(input))
//console.log(part2(input))
