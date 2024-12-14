export function part1(input: Array<string>) {
  const grid = input.map(m => m.split("").map(Number))
  const directions = [
    [1, 0], // down
    [0, 1], // right
    [0, -1],// left
    [-1, 0],//up
  ]
  const zeroPosition = searchZero(grid)
  let ans = 0
  for (const z of zeroPosition) {
    const se = new Set([])
    const sen = sousa(z[0], z[1], grid, directions, se)
    ans += sen.size
  }

  return ans
}

export function part2(input: Array<string>) {

}

function parseInput(input: string): Array<string> {
  return input.trim().split(/\n/)
}

function isInGrid(r: number, c: number, i: Array<Array<number>>): boolean {
  return r >= 0 && r < i.length && c >= 0 && c < i[0].length
}

function searchZero(g: Array<Array<number>>): Array<Array<number>> {
  const zeroPosition = []
  for (let i = 0; i < g.length; i++) {
    for (let l = 0; l < g[i].length; l++) {
      if (g[i][l] === 0) {
        zeroPosition.push([i, l])
      }
    }
  }
  return zeroPosition
}

function sousa(r: number, c: number, g: Array<Array<number>>, ds: Array<Array<number>>, se: Set<string>): Set<string> {
  const s = g[r][c]
  
  if (s === 9) {
    se.add(`${r} ${c}`)
  }
  if (isInGrid(r+ds[0][0], c+ds[0][1], g) && g[r+ds[0][0]][c+ds[0][1]] === s + 1) sousa(r+ds[0][0], c+ds[0][1], g, ds, se)
  if (isInGrid(r+ds[1][0], c+ds[1][1], g) && g[r+ds[1][0]][c+ds[1][1]] === s + 1) sousa(r+ds[1][0], c+ds[1][1], g, ds, se)
  if (isInGrid(r+ds[2][0], c+ds[2][1], g) && g[r+ds[2][0]][c+ds[2][1]] === s + 1) sousa(r+ds[2][0], c+ds[2][1], g, ds, se)
  if (isInGrid(r+ds[3][0], c+ds[3][1], g) && g[r+ds[3][0]][c+ds[3][1]] === s + 1) sousa(r+ds[3][0], c+ds[3][1], g, ds, se)
  return se
}

const rawInput = await Deno.readTextFile(`${import.meta.dirname}/input.txt`)
const input = parseInput(rawInput)

console.log(part1(input))
//console.log(part2(input))
