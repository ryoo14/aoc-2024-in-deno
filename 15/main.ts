export function part1(input: Array<string>) {
  const grid: string[][] = []
  let dir: string[] = []
  let flag = true
  for (const i of input) {
    if (i === "") {
      flag = false
      continue
    }
    
    if (flag) {
      grid.push(i.split(""))
    } else {
      dir = dir.concat(i.split(""))
    }
  }

  let at: number[] = []
  for (let i = 0; i < grid.length; i++) {
    for (let l = 0; l < grid[i].length; l++) {
      if (grid[i][l] === "@") {
        at.push(i, l)
        break
      }
    }
  }

  const m = new Map()
  m.set("^", [-1, 0])
  m.set(">", [0, 1])
  m.set("<", [0, -1])
  m.set("v", [1, 0])

  for (const d of dir) {
    const dd: number[] = m.get(d)
    const l: number[][] = []
    while (1) {
      const po = grid[at[0]+dd[0]][at[1]+dd[1]]
      if (po === "#") {
        if (l.length !== 0) {
          at = [l[0][0]-dd[0], l[0][1]-dd[1]]
        }
        break
      } else if (po === "O") {
        l.push([at[0]+dd[0], at[1]+dd[1]])
        at = [at[0]+dd[0], at[1]+dd[1]]
      } else if (po === ".") {
        if (l.length !== 0) {
          grid[at[0]+dd[0]][at[1]+dd[1]] = "O"
          at = [l[0][0], l[0][1]]
          grid[at[0]-dd[0]][at[1]-dd[1]] = "."
          grid[at[0]][at[1]] = "@"
        } else {
          grid[at[0]][at[1]] = "."
          grid[at[0]+dd[0]][at[1]+dd[1]] = "@"
          at = [at[0]+dd[0], at[1]+dd[1]]
        }
        break
      }
    }
  }

  let ans = 0
  for (let i = 0; i < grid.length; i++) {
    for (let l = 0; l < grid[i].length; l++) {
      if (grid[i][l] === "O") {
        ans += 100 * i + l
      }
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
