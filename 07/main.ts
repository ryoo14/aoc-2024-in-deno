export function part1(input: Array<string>) {
  let ans = 0
  for (const line of input) {
    const [total, nums] = separateInput(line)
    if (calcRecurse(total, nums, 0, 0)) {
      ans += total
    }
  }
   
  return ans
}

export function part2(input: Array<string>) {

}

function parseInput(input: string): Array<string> {
  return input.trim().split(/\n/)
}

function separateInput(input: string): [number, Array<number>] {
  const [tmp1, tmp2] = input.split(":") 
  const total = Number(tmp1)
  const nums = tmp2.trim().split(" ").map(t => Number(t))

  return [total, nums]
}

function calcRecurse(total: number, nums: Array<number>, tmp: number, index: number): boolean {
  if (nums.length - 1 === index) {
    if (total === tmp * nums[index]) return true
    if (total === tmp + nums[index]) return true
    return false
  }
  const f = nums[index]
  return calcRecurse(total, nums, tmp+f, index + 1) || calcRecurse(total, nums, tmp === 0 ? f : f * tmp, index + 1)
}

const rawInput = await Deno.readTextFile(`${import.meta.dirname}/input.txt`)
const input = parseInput(rawInput)

console.log(part1(input))
//console.log(part2(input))
