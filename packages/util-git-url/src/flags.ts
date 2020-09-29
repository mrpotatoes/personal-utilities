// TODO: Most of these functions rely on the function above. Let's try to fix that.
import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

// TODO: Monad this up baby!
const mappings = yaml.safeLoad(
  fs.readFileSync(path.resolve('./configs/mappings.yml'), 'utf8')
)

// TODO: Curry this up so it doesn't depend on the code above.
// A lens here could be great so we don't break things if this property doesn't exist.
// providerAliases :: Object -> String
export const providerAliases = providerHost => mappings.providers[providerHost].aliases

// addAlias :: Object -> String -> String
export const addAlias = providerHost => e => (
  providerAliases(providerHost).hasOwnProperty(e)
    ? providerAliases(providerHost)[e]
    : e.replace('--', '')
)

// TODO: Are these worth currying or are they fine as is?
export const aliases = mappings.providers['github.com'].aliases
export const allFlags = [...mappings.flags, ...Object.keys(aliases)]
export const allowedFlags = []//[...new Set(allFlags)]

// This should be in a monad so that we can test this easier. It's also a side effect.
export const providedFlags = () => process.argv.slice(2, process.argv.length)

// TODO: Curry this function.
// Remove the user -- stuff to clean it up.
export const sanitizedFlags = providedFlags().map(e => (e.replace('--', '')))

// Predicate to determine if something is required.
export const isAllowedFlag = e => allowedFlags.includes(e)

// TODO: Curry this function.
// The flags that the plugins will build.
export const flags = sanitizedFlags.filter(isAllowedFlag)
