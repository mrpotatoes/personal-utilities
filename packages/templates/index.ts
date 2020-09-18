import * as fs from 'fs'
import * as path from 'path'
import ejs from 'ejs'

const str = fs.readFileSync(path.join(__dirname, '/test.ejs'), 'utf8')
const vars = {
  andric: '"Andric" is my name, yo.',
  names: ['thingy', 'bar', 'baz'], 
  rmWhitespace: true,
}

const template = ejs.compile(str)

export default template

// const compiled = template(vars)

// // console.log(template)
// console.log(compiled)