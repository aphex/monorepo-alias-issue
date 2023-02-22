import { nestedThing } from '@myapp/core'

// when using the alias this is any, when using the relative path this is a string
// however if you add the `core-root` alias to the tsconfig.json of the frontend
// then this will be a string, however this means every package needs to declare aliases for all
// of its dependencies aliases
const result = nestedThing()

console.log(result)
