export function part1(input: Array<string>) {
  const words = searchWords(input)
  const grid = input.map(m => m.split(""))
  const m = new Map()

  for (let l = 0; l < grid.length; l++) {
    for (let i = 0; i < grid[l].length; i++) {
      for (const w of words) {
        if (w === input[l][i]) {
          if (m.has(w)) {
            const ll = m.get(w)
            ll.push([l, i])
            m.set(w, ll)
          } else {
            m.set(w, [[l, i]])
          }
        }
      }
    }
  }
  let ans = 0
  for (const [w, vs] of m.entries()) {
    let v: number[][] = [...vs]
    while (1){
      const [k, vz] = sousa(v[0], grid, w)
      if (v[0][0] === 0 && v[0][1] === 4) {
        console.log(v)
        console.log(k, vz)
      }
      ans += k * vz.length
      for (const vzv of vz) {
        const vt = v.filter(vv => vv.join(",") !== vzv.join(","))
        v = vt
      }
      if (v.length === 0) {
        break
      }
    }
  }

  return ans
}

function sousa(v: Array<number>, g: Array<Array<string>>, w: string): [number, number[][]] {
  let l: Array<Array<number>> = [v]
  let p = 4
  g[v[0]][v[1]] = w + w 
  const dir = [
    [0, 1],  // right
    [1, 0], // down
    [0, -1],  // left
    [-1, 0],  // up
  ]


  const right = [v[0] + dir[0][0], v[1] + dir[0][1]]
  const down = [v[0] + dir[1][0], v[1] + dir[1][1]]
  const left = [v[0] + dir[2][0], v[1] + dir[2][1]]
  const up = [v[0] + dir[3][0], v[1] + dir[3][1]]
  if (isInGrid(right[1], right[0], g)) {
    if (w === g[right[0]][right[1]]) {
      p--
      const [o, t] = sousa(right, g, w)
      p += o
      l = l.concat(t)
    } else if (w + w === g[right[0]][right[1]]) {
      p--
    }
  }
  if (isInGrid(down[1], down[0], g)) {
    if (w === g[down[0]][down[1]]) {
      p--
      const [o, t] = sousa(down, g, w)
      p += o
      l = l.concat(t)
    } else if (w + w === g[down[0]][down[1]]) {
      p--
    }
  }
  if (isInGrid(left[1], left[0], g)) {
    if (w === g[left[0]][left[1]]) {
      p--
      const [o, t] = sousa(left, g, w)
      p += o
      l = l.concat(t)
    } else if (w + w === g[left[0]][left[1]]) {
      p--
    }
  }
  if (isInGrid(up[1], up[0], g)) {
    if (w === g[up[0]][up[1]]) {
      p--
      const [o, t] = sousa(up, g, w)
      p += o
      l = l.concat(t)
    } else if (w + w === g[up[0]][up[1]]) {
      p--
    }
  }

  return [p, l]
}

export function part2(input: Array<string>) {

}

function parseInput(input: string): Array<string> {
  return input.trim().split(/\n/)
}

function searchWords(input: Array<string>): Set<string> {
  const l = input.map(i => i.split(""))
  return new Set(l.flat())
}

function isInGrid(r: number, c: number, g: Array<Array<string>>): boolean {
  return r >= 0 && r < g.length && c >= 0 && c < g[0].length
}

const rawInput = await Deno.readTextFile(`${import.meta.dirname}/input.txt`)
const input = parseInput(rawInput)

console.log(part1(input))
//console.log(part2(input))
