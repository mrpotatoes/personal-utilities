console.clear()

import { providers } from './src/providers'
import { gitRemote, providedFlags } from './src/side-effects'

const provider = providers(gitRemote())

if (!provider) {
  console.log('')
  process.exit(0)
}

// const links = provider(gitRemote(), providedFlags)
const links = provider(gitRemote(), ['pr', 'commits', 'rel'])
console.log(links)

// Finally open the links.
// openLinks(links)
