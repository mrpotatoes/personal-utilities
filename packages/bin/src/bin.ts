import chalk from 'chalk'
import fs from 'fs'
import inquirer from 'inquirer'
import { config } from 'process'

console.clear()

const bin = () => {
  try {
    console.log('Welcome, let\'s create greatness together!')
  } catch (e) {
    console.log()
    console.error('Unable to complete script')
    console.error(e)
    process.exit(1)
  }
}

bin()

export default bin