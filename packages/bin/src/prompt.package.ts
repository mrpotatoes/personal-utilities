import inquirer from 'inquirer'
import chalk from 'chalk'
import { StarterConfig } from './types'
import licenses from './licenses'

const createQuestion = (namespace: string) => [{
  type: 'confirm',
  name: 'init',
  message: `Would you like to create a new package in ${chalk.green(namespace)}?`,
}]

const monorepoQuestions = [
  {
    type: 'list',
    name: 'type',
    message: 'Package type',
    choices: ['cli-tool', 'node-lib', 'react-app', 'react-component', 'server-app'],
    default: 'node-lib',
  }, {
    type: 'input',
    name: 'name',
    message: 'Name of your package',
    validate: (input) => (input === '') ? 'A properly formatted name is required': true
  }, {
    type: 'input',
    name: 'description',
    message: 'Please describe your package',  
  }, {
    type: 'list',
    name: 'license',
    choices: licenses,
    default: 'MIT'
  }, {
    type: 'confirm',
    name: 'public',
    message: 'Do you intend to publish this package?',  
  }, {
    type: 'list',
    name: 'tests',
    message: 'Do you prefer co-located tests or a ./tests directory?',
    choices: ['co-located', 'directory'],
    default: 'directory'
  },
]

export default {
  run: async (config: StarterConfig) => {
    inquirer.prompt(createQuestion(config.namespace)).then(async (answers) => {
      if (answers.init) {
        console.log('cool, let me do that for you now')

        const answers = await inquirer.prompt(monorepoQuestions)
        console.log(answers)
      }
    })
  }
}