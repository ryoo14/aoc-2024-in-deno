export function part1(input: Array<string>) {
  // Grid
  const grid = input.map(i => i.split(""))
  // Create set of non-dot strings in input
  const words = new Set(grid.flat())
  words.delete(".")

  // Explore where characters are placed in the grid and store them in a map
  const m: Map<string, Array<number[]>> = new Map()
  for (let i = 0; i < grid.length; i++) {
    for (const w of words) {
      for (let l = 0; l < grid[i].length; l++) {
        if (w === grid[i][l]) {
          if (m.has(w)) {
            const tmp = m.get(w)!
            tmp.push([i, l])
            m.set(w, tmp)
          } else {
            m.set(w, [[i, l]])
          }
        }
      }
    }
  }

  // Find signal location
  const mmm = []
  let ans = 0
  for (const mv of m.values()) {
    // Generate combinations between antennas
    const combi = generateCombi(mv)
    // Find the distance between the antennas and use the results to find the signal range
    for (const c of combi) {
      const f = [c[0][0] - c[1][0], c[0][1] - c[1][1]]
      for (const cc of c) {
        const pl = [cc[0] + f[0], cc[1] + f[1]]
        // Store the results because the signal will arrive at a location other than the antenna location. 
        if (JSON.stringify(c[0]) !== JSON.stringify(pl) && JSON.stringify(c[1]) !== JSON.stringify(pl)) {
          mmm.push(pl)
        }
        
        const mi = [cc[0] - f[0], cc[1] - f[1]]
        if (JSON.stringify(c[0]) !== JSON.stringify(mi) && JSON.stringify(c[1]) !== JSON.stringify(mi)) {
          mmm.push(mi)
        }
      }
    }
  }
  
  // Store the results because the signal will arrive at a location other than the antenna location.
  const e = new Set(mmm.map(mmmm => JSON.stringify(mmmm)))
  const ee = Array.from(e.values().map(me => JSON.parse(me)))
  // Determine whether it is within the grid and end!
  for (const eee of ee) {
    if (isInGrid(eee[0], eee[1], grid)) {
      ans += 1
    }
  }

  return ans
}

export function part2(input: Array<string>) {

}

function parseInput(input: string): Array<string> {
  return input.trim().split(/\n/)
}

function isInGrid(r: number, c: number, i: Array<Array<string>>): boolean {
  return r >= 0 && r < i.length && c >= 0 && c < i[0].length
}

function generateCombi(list: Array<Array<number>>) {
  const combi: number[][][] = []
  for (let i = 0; i < list.length; i++) {
    for (let l = i + 1; l < list.length; l++) {
      combi.push([list[i], list[l]])
    }
  }
  return combi
}

const rawInput = await Deno.readTextFile(`${import.meta.dirname}/input.txt`)
const input = parseInput(rawInput)

console.log(part1(input))
//console.log(part2(input))
