export function part1(input: Array<string>) {
  const robots = []
  for (const i of input) {
    robots.push(sep(i))
  }

  let upleft = 0
  let upright = 0
  let downleft = 0
  let downright = 0

  for (const r of robots) {
    const vx = r[2]
    const vy = r[3]
    let x = r[0]
    let y = r[1]
    for (let i = 0; i < 100; i++) {
      [x, y] = move(x, y, vx, vy)
    }
    if (x < 50 && y < 51) {
      upleft++
    } else if (x < 50 && 51 < y) {
      downleft++
    } else if (50 < x && y < 51) {
      upright++
    } else if (50 < x && 51 < y) {
      downright++
    }
  }
  return upleft * downleft * upright * downright
}

export function part2(input: Array<string>) {

}

function move(x: number, y: number, vx: number, vy: number) {
  let tx = x + vx
  let ty = y + vy
  if (101 <= tx) {
    tx -= 101
  } else if (tx < 0) {
    tx += 101
  }

  if (103 <= ty) {
    ty -= 103
  } else if (ty < 0) {
    ty += 103
  }

  return [tx, ty]
}

function sep(i: string) {
  const r = i.split(" ")
  const pc = r[0].split("p=")[1]
  const vc = r[1].split("v=")[1]
  const p = pc.split(",").map(Number)
  const v = vc.split(",").map(Number)
  return [...p, ...v]
}

function parseInput(input: string): Array<string> {
  return input.trim().split(/\n/)
}
const rawInput = await Deno.readTextFile(`${import.meta.dirname}/input.txt`)
const input = parseInput(rawInput)

console.log(part1(input))
//console.log(part2(input))
