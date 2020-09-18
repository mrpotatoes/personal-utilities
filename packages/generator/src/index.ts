import fs from 'fs'

import template from '@ts-monorepo-starter/templates'

const vars = {
  andric: '"Andric" is my name, yo.',
  names: ['thingy', 'bar', 'baz'],
  rmWhitespace: true,
}

console.log(template(vars))

// const filename = '/Users/n0319505/Desktop/thingy/this-file-is-a-test.json'
// fs.writeFileSync(filename, JSON.stringify({}, null, 2))
