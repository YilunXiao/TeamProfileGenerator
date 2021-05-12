// DEPENDENCIES
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


// VARIABLES
const questions = [
  // General employee questions
  {
    type: 'input',
    name: 'name',
    message: 'What is your full name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is your ID number?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
  },
];
// Position specific questions
const managerQuestion = [
  {
    type: 'input',
    name: 'officeNumber',
    message: 'What is your office number?',
  },
]
const engineerQuestion = [
  {
    type: 'input',
    name: 'gitHub',
    message: 'What is your Github profile?',
  },
]
const internQuestion = [
  {
    type: 'input',
    name: 'school',
    message: 'Which school did you most recently finish?',
  },
]
// Loop questions
const loopQuestions = [
  {
    type: 'confirm',
    name: 'addEmpoyee',
    message: 'Do you want to add another employee?',
  },
  {
    type: 'checkbox',
    name: 'employeeRole',
    message: 'Which role is this employee part of?',
    choices: ['Engineer', 'Intern'],
  },
]



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
  // Question answers
  let managers = [];
  let engineers = [];
  let interns = [];

  // First get MANAGER's information
  try {
    const managerAns = await inquirer.prompt(questions.concat(managerQuestion));
    managers.push(managerAns)
  } catch(error) {
    console.error(error);
  }

  // Check if user wants to add employee
  try {
    var loop = await inquirer.prompt(loopQuestions);
  } catch(error) {
    console.error(error);
  }
  // Get Engineer info
  try {
    const engineerAns = await inquirer.prompt(questions.concat(engineerQuestion));
    engineers.push(engineerAns)
  } catch(error) {
    console.error(error);
  }
  
  // Check if user wants to add employee
  try {
    const loop = await inquirer.prompt(loopQuestions);
  } catch(error) {
    console.error(error);
  }
  // Get Intern info
  try {
    const internAns = await inquirer.prompt(questions.concat(internQuestion));
    interns.push(internAns)
  } catch(error) {
    console.error(error);
  }
  

  // Log out info
  console.log('\nManagers: ');
  console.log(`Name: ${managers[0].name}, ID: ${managers[0].id}, Email: ${managers[0].email}, Office Number: ${managers[0].officeNumber}`);

  console.log('\nEngineers: ');
  console.log(`Name: ${engineers[0].name}, ID: ${engineers[0].id}, Email: ${engineers[0].email}, Github: ${engineers[0].gitHub}`);

  console.log('\nInterns: ');
  console.log(`Name: ${interns[0].name}, ID: ${interns[0].id}, Email: ${interns[0].email}, School: ${interns[0].school}`);

  // Create HTML page of team when application exits
}

ask();