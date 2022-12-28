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
        name: 'test',
        message: 'Please provide test instructions for your project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license are you using?',
        choices: ['MIT License', 'GNU Lesser General Public License', 'Apache license 2.0', 'Academic Free License v3.0', 'Creative Commons Attribution 4.0' ]
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'What is your linkedin username?'
    }
];

// TODO: Create a function to write README file
function writeToFile() {
    inquirer.prompt(questions).then((answers) => {
        //creates variables that access the value of the answer from the user input//
        // let {title, description, installation,usage, contributing, tests, license, github, linkedin } = answers;
        
        // const formatted = `# ${title} \n ## Description \n ${description} \n ## Table of Contents \n ${contents} \n ## Installation \n ${installation} \n ## Usage \n ${usage} \n ## License \n ${license} \n ## Contributing \n ${contributing} \n ## Tests ${tests} \n ## Questions \n ${github}, ${linkedin}`;
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
