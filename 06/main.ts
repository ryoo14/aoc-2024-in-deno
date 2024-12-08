export function part1(input: Array<string>) {
  const chunks = splitIntoChunks(input)
  const coordinate: number[] = []
  for (let i = 0; i < chunks.length; i++) {
    if (chunks[i].includes("^")) {
      coordinate.push(i)
      const index = chunks[i].indexOf("^")
      coordinate.push(index)
    }
  }

  let ans = 1
  let flag = true
  const direction: DirectionMap = {
    "^": [-1, 0],
    ">": [0, 1],
    "v": [1, 0],
    "<": [0, -1]
  }

  while (1) {
    const dir = chunks[coordinate[0]][coordinate[1]] as "^" | ">" | "<" | "v"
    const [nr, nc] = newRowAndColumn(coordinate, direction, dir)
    flag = isInGrid(nr, nc, chunks)
    if (! flag) {
      break
    }

    const result = patrolSecurityGuard(nr, nc, chunks, dir)
    if (typeof result === "string") {
      chunks[coordinate[0]][coordinate[1]] = result
    } else if (typeof result === "number") {
      chunks[nr][nc] = dir
      coordinate[0] = nr
      coordinate[1] = nc
      ans += result
    }
  }
  return ans
}

export function part2(input: Array<string>) {

}

function newRowAndColumn(coordinate: number[], direction: DirectionMap, directionString: "^" | ">" | "<" | "v") {
  const nr = coordinate[0]+direction[directionString][0]
  const nc = coordinate[1]+direction[directionString][1]
  return [nr, nc]
}

function patrolSecurityGuard(nr: number, nc: number, chunks: Array<Array<string>>, directionString: "^" | ">" | "<" | "v") {
  if (chunks[nr][nc] === "#") {
    let dir = ""
    if (directionString === "^") {
      dir = ">"
    } else if (directionString === ">") {
      dir = "v"
    } else if (directionString === "v") {
      dir = "<"
    } else if (directionString === "<") {
      dir = "^"
    }
    return dir
  } else {
    if (chunks[nr][nc].match(/[\^><v]/)) {
      return 0
    } else {
      return 1
    }
  }
}

function splitIntoChunks(input: Array<string>) {
  return Array.from(input.map(i => i.split("")))
}

function isInGrid(r: number, c: number, i: Array<Array<string>>): boolean {
  return r >= 0 && r < i.length && c >= 0 && c < i[0].length
}

function parseInput(input: string): Array<string> {
  return input.trim().split(/\n/)
}

type DirectionMap = {
  [key in "^" | ">" | "v" | "<"]: [number, number];
}

const rawInput = await Deno.readTextFile(`${import.meta.dirname}/input.txt`)
const input = parseInput(rawInput)

console.log(part1(input))
console.log(part2(input))
