// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // should return a license badge
  renderLicenseLink(license);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !=true) {
      return " ";
    }
    else {
  return `https://img.shields.io/badge/license-${license}-blue`
    }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //creates variables that access the value of the answer from the user input//
  let {title, description, installation,usage, contributing, tests, license, github, linkedin } = data;
  return `# ${title}
  ${renderLicenseBadge(license)}
  ## Description
  ${description}
  ## Table of Contents
  * (Description)[#description]
  * (Installation)[#installation]
  * (Usage)[#usage]
  * (License)[#license]
  * (Contributing)[#contributing]
  * (Tests)[#tests]
  * (Questions)[#questions]

  ## Installation
  ${installation}
  ## Usage
  ${usage}
  ## License
  ${license}
  ## Contributing
  ${contributing}
  ## Tests 
  ${tests}
  ## Questions
  If you have any questions about the project find me at ${github}, ${linkedin}

`;
}

module.exports = generateMarkdown;
