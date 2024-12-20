export function part1(input: Array<string>) {
  const s: number[] = []
  const grid: string[][] = []

  for (let i = 0; i < input.length; i++) {
    const ii = input[i].split("")
    grid.push([])
    for (let l = 0; l < ii.length; l++) {
      grid[i].push(ii[l])
      if (ii[l] === "S") {
        s.push(i, l)
      }
    }
  }
  const up = sousa(s, grid, [-1, 0], [s], 1)
  const down = sousa(s, grid, [1, 0], [s], 1)
  const left = sousa(s, grid, [0, -1], [s], 1)
  const right = sousa(s, grid, [0, 1], [s], 1)
  const al = []
  if (up !== 0) al.push(up) 
  if (down !== 0) al.push(down) 
  if (left !== 0) al.push(left) 
  if (right !== 0) al.push(right) 

  const ans = Math.min(...al)
  return ans
}

function sousa(start: number[], grid: string[][], dir: number[], map: number[][], degree: number): number {
  const gs = grid[start[0]+dir[0]][start[1]+dir[1]] 
  if (gs === "#") {
    return 0
  } else if (gs === "." || gs === "S") {
    if (map.some(m => m.join(",") === [start[0]+dir[0], start[1]+dir[1]].join(","))) {
      return 0
    } else {
      map.push([start[0]+dir[0], start[1]+dir[1]])
      const ss = [start[0]+dir[0], start[1]+dir[1]]
      let up = 0
      let down = 0
      let left = 0
      let right = 0
      if (dir[0] === -1) {
        up = sousa(ss, grid, [-1, 0], [...map], degree)
        left = sousa(ss, grid, [0, -1], [...map], degree+1)
        right = sousa(ss, grid, [0, 1], [...map], degree+1)
      } else if (dir[0] === 1) {
        down = sousa(ss, grid, [1, 0], [...map], degree)
        left = sousa(ss, grid, [0, -1], [...map], degree+1)
        right = sousa(ss, grid, [0, 1], [...map], degree+1)
      } else if (dir[1] === -1) {
        up = sousa(ss, grid, [-1, 0], [...map], degree+1)
        down = sousa(ss, grid, [1, 0], [...map], degree+1)
        left = sousa(ss, grid, [0, -1], [...map], degree)
      } else if (dir[1] === 1) {
        up = sousa(ss, grid, [-1, 0], [...map], degree+1)
        down = sousa(ss, grid, [1, 0], [...map], degree+1)
        right = sousa(ss, grid, [0, 1], [...map], degree)
      }

      const al = []
      if (up !== 0) al.push(up) 
      if (down !== 0) al.push(down) 
      if (left !== 0) al.push(left) 
      if (right !== 0) al.push(right) 

      return Math.min(...al)
    }
  } else if (gs === "E") {
    console.log(map, degree)
    return map.length + degree * 1000
  }

  return 100
}

export function part2(input: Array<string>) {

}

function parseInput(input: string): Array<string> {
  return input.trim().split(/\n/)
}

const rawInput = await Deno.readTextFile(`${import.meta.dirname}/input.txt`)
const input = parseInput(rawInput)

console.log(part1(input))
console.log(part2(input))
