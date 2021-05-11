// DEPENDENCIES
const inquirer = require('inquirer');
const questions = [
    // Pass your questions in here
    {
        type: 'input',
        name: 'reason',
        message: 'Why?',
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where?',
    },
  ];

/*
// Inquire prompt
inquirer
  .prompt(questions)
  .then(answers => {
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

*/

async function ask() {
    // Get which roles are included
    const answers = await inquirer.prompt(questions);
    console.log(answers);

    // Get info regarding those specific roles


    // Create HTML page of team
}

ask();