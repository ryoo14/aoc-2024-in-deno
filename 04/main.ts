export function part1(input: Array<string>) {
  const ans = countXmas(input)
  return ans
}

export function part2(input: Array<string>) {
  const ans = countMas(input)
  return ans
}

function countXmas(input: Array<string>) {
  const i = input.map(l => l.split(""))
  let count = 0
  const xmas = "XMAS"

  const dirs = [ [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1] ]

  for (let r = 0; r < i.length; r++) {
    for (let c = 0; c < i[0].length; c++) {
      for (const d of dirs) {
        let flag = true
        for (let n = 0; n < xmas.length; n++) {
          const nr = r + d[0] * n
          const nc = c + d[1] * n
          if (!isInGrid(nr, nc, i) || i[nr][nc] !== xmas.split("")[n]) {
            flag = false
            break
          }
        }
        if (flag) {
          count += 1
        }
      }

    }
  }
  return count
}

function countMas(input: Array<string>) {
  const i = input.map(l => l.split(""))
  let count = 0
  const mas = [
    [ ["M", "A", "S"], ["M", "A", "S"] ],
    [ ["M", "A", "S"], ["S", "A", "M"] ],
    [ ["S", "A", "M"], ["M", "A", "S"] ],
    [ ["S", "A", "M"], ["S", "A", "M"] ],
  ]

  for (let r = 0; r < i.length - 1; r++) {
    for (let c = 0; c < i[0].length - 1; c++) {
      for (const [m1, m2] of mas) {
        // up-left to down-right
        let flag1 = true
        for (let n = 0; n < m1.length; n++) {
          const nr = r - 1 + n
          const nc = c - 1 + n
          if (!isInGrid(nr, nc, i) || i[nr][nc] !== m1[n]) {
            flag1 = false
            break
          }
        }
        // up-right to down-left
        let flag2 = true
        for (let n = 0; n < m2.length; n++) {
          const nr = r - 1 + n
          const nc = c + 1 + -n
          if (!isInGrid(nr, nc, i) || i[nr][nc] !== m2[n]) {
            flag2 = false
            break
          }
        }
        if (flag1 && flag2) {
          count += 1
        }
      }
    }
  }
  return count
}

function isInGrid(r: number, c: number, i: Array<Array<string>>): boolean {
  return r >= 0 && r < i.length && c >= 0 && c < i[0].length
}

function parseInput(input: string): Array<string> {
  return input.trim().split(/\n/)
}

 const rawInput = await Deno.readTextFile(`${import.meta.dirname}/input.txt`)
 const input = parseInput(rawInput)

 console.log(part1(input))
 console.log(part2(input))
