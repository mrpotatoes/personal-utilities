export * from './lib/async'
export * from './lib/hash'
export * from './lib/number'

import template from '@ts-monorepo-starter/templates'

const vars = {
  andric: '"Andric" is my name, yo.',
  names: ['thingy', 'bar', 'baz'],
  rmWhitespace: true,
}

console.log(template(vars))