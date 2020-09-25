import chalk from 'chalk'
import inquirer from 'inquirer'

const createQuestion = [{
  type: 'confirm',
  name: 'init',
  message: 'Would you like to create a new package?',
}]

const monorepoQuestions = [{
    type: 'input',
    name: 'namespace',
    message: `Namespace (ex: ${chalk.blue('@yournamespace')})`,
  },
  {
    type: 'input',
    name: 'description',
    message: "Describe the monorepo",
  },
  {
    type: 'input',
    name: 'tags',
    message: `Tags (comma separated ex: ${chalk.blue('tag1, tag2, tag3')})`,
  },
]

export default {
  run: async () => {
    inquirer.prompt(createQuestion).then(async (answers) => {
      if (!answers.init) {
        console.log('Sorry to see you go. Let us meet up again in the future.')
      }

      if (answers.init) {
        console.log('Excellent news! Let me do that for you now but let\'s answer a few questions first')
        const answers = await inquirer.prompt(monorepoQuestions)

        console.log(answers)
      }
    })
  }
}