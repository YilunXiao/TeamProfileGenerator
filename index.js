// DEPENDENCIES
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const CreateHtml = require('./lib/CreateHtml');


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
const loopQ = [
  {
    type: 'confirm',
    name: 'addEmployee',
    message: 'Do you want to add another employee?',
  }
]
const roleQ = [
  {
    type: 'list',
    name: 'employeeRole',
    message: 'Which role is this employee part of?',
    choices: ['Engineer', 'Intern'],
  },
]


async function ask() {
  // Question answers
  let managers = [];
  let engineers = [];
  let interns = [];

  
  // First get MANAGER's information
  try {
    const managerAns = await inquirer.prompt(questions.concat(managerQuestion));
    const manager = new Manager(managerAns.name, managerAns.id, managerAns.email, managerAns.officeNumber); // name, id, email, officeNumber
    managers.push(manager);
  } catch(error) {
    console.error(error);
  }

  // Check if user wants to add employee
  try {
    var loop = await inquirer.prompt(loopQ);
  } catch(error) {
    console.error(error);
  }

  // console.log(loop);

  while(loop.addEmployee) {
    // Check role user wants to add
    try {
      var role = await inquirer.prompt(roleQ);
    } catch(error) {
      console.error(error);
    }

    switch(role.employeeRole) {
      case 'Engineer':
        // Get Engineer info
        try {
          const engineerAns = await inquirer.prompt(questions.concat(engineerQuestion));
          const engineer = new Engineer(engineerAns.name, engineerAns.id, engineerAns.email, engineerAns.gitHub); // name, id, email, gitHub
          engineers.push(engineer)
        } catch(error) {
          console.error(error);
        }
        break;
      case 'Intern':
        // Get Intern info
        try {
          const internAns = await inquirer.prompt(questions.concat(internQuestion));
          const intern = new Intern(internAns.name, internAns.id, internAns.email, internAns.school); // name, id, email, school
          interns.push(intern);
        } catch(error) {
          console.error(error);
        }
        break;
    }

    // Check if user wants to add employee
    try {
      loop = await inquirer.prompt(loopQ);
    } catch(error) {
      console.error(error);
    }
  }


  

  // Log out info
  console.log('Managers: ');
  console.log(`Name: ${managers[0].name}, ID: ${managers[0].id}, Email: ${managers[0].email}, Office Number: ${managers[0].officeNumber}`);

  if (engineers.length) {
    console.log('Engineers: ');
    for (let eng of engineers) {
      console.log(`Name: ${eng.name}, ID: ${eng.id}, Email: ${eng.email}, Github: ${eng.gitHub}`);
    }
  }

  if (interns.length) {
    console.log('Interns: ');
    for (let intern of interns) {
      console.log(`Name: ${intern.name}, ID: ${intern.id}, Email: ${intern.email}, School: ${intern.school}`);
    }
  }
  
  // Create HTML page of team when application exits
  const createHtml = new CreateHtml(managers, engineers, interns);
  createHtml.createPage();
}

ask();