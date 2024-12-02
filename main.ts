import $ from "@david/dax"

const day = Deno.args[0]

await $`deno run -A ${day}/main.ts`
