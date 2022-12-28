// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require('fs');
const { get } = require('http');
const generateMarkdown = require ('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description of your project'
    },  
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Plese provide instructions and examples for use'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines for your project'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions for your project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license are you using?',
        choices: ['MIT', 'GNU', 'Apache', 'Academic', 'CreativeCommons' ]
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
function writeToFile() {
    inquirer.prompt(questions).then((answers) => {
        fs.writeFile('YourREADME.md', generateMarkdown(answers), (err) =>
        err ? console.error(err) : console.log('answers recorded') );
      });    
      }

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();
