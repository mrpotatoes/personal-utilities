// import { meaningOfLife } from "@ts-monorepo-starter/foo";

import tpl from '@ts-monorepo-starter/templates'

const vars = {
  andric: '"Andric" is my name, yo.',
  names: ['thingy', 'bar', 'baz'],
  rmWhitespace: true,
}

const compiled = tpl(vars)

// eslint-disable-next-line no-console
console.log(compiled)
