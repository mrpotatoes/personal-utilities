// This file just compiles the provider plugins into one.
// import url from 'url'
import { generic } from './plugins'
import { userDefined } from './side-effects'
import { providerHost } from './paths'
import { Provider } from './types'

// const url = require('url')
// const plugins = require('./plugins')
// const { userDefined } = require('./side-effects')
// const { providerHost } = require('./paths')

// Should be at the very least urnary.
const knownProviders = (): Provider => ({
  'github.com': generic,
  'gitlab.com': generic,
  'bitbucket.org': generic,
})

// This should be singular since it evaluates to a single provider.
export const providers = (gitUrl) => {
  // TODO: Fix me, conflicts with the function name.
  // It isn't breaking now but it is confusing.
  const availableProviders = {
    ...userDefined(),
    ...knownProviders()
  }

  // Get the single git provider
  const providerFn = availableProviders[providerHost(gitUrl)]
    ? availableProviders[providerHost(gitUrl)]
    : false

  // This is curryed so setup the first param so it can be used down the line.
  return providerFn(providerHost(gitUrl))
}
