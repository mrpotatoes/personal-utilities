import chalk from 'chalk'
import fs from 'fs'
import inquirer from 'inquirer'
import { config } from 'process'

import { StarterConfig } from './types'
import init from './prompt.init'
import newPackage from './prompt.package'

console.clear()

// TODO: Use __dirname
const PATH = './packages/.@ts-monorepo-starter/config.json'

// TODO: This should come from the main package (generator) at some point.
const CURRENT_VERSION = '1.0.0'

const defaultConfig = {
  namespace: '',
  version: '1.0.0',
}

// TODO: Make this more functional.
// Check if this is a mono repo first.
const isMonorepo = (path: string): StarterConfig => {
  if (!fs.existsSync(path)) {
    return defaultConfig
  }

  const contents = fs.readFileSync(path, 'utf-8')

  if (contents === '') {
    return defaultConfig
  }

  return JSON.parse(contents)
}

const bin = () => {
  try {
    console.log('Welcome, let\'s create greatness together!')

    // Create the monorepo
    if (isMonorepo(PATH).namespace === '') {
      console.log('Looks like this directory isn\'t a @ts-monorepo-starter managed directory')
      init.run()
    } else {
      const config = JSON.parse(fs.readFileSync(PATH, 'utf-8'))
      newPackage.run(config)
    }
  } catch (e) {
    console.log()
    console.error('Unable to complete script')
    console.error(e)
    process.exit(1)
  }
}

bin()

export default bin