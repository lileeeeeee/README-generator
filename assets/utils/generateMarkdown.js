// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // should return a license badge
  return `![badge](${renderLicenseLink(license)})`;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (typeof license === undefined) {
      return " ";
    }
    else {
  return `https://img.shields.io/badge/license-${license}-blue.svg`;
  
}
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (typeof license === undefined) {
    return " ";
  }
  else {
    return renderLicenseBadge(license);
}
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //creates variables that access the value of the answer from the user input//
  let {title, description, installation,usage, contributing, tests, license, github, email } = data;
  return `# ${title}
  ${renderLicenseSection(license)}
  ## Description
  ${description}
  ## Table of Contents
  * <a href="#installation">Installation</a>
  * <a href="#usage">Usage</a>
  * <a href="#license">License</a>
  * <a href="#contributing">Contributing</a>
  * <a href="#tests">Tests</a>
  * <a href="#questions">Questions</a>

  ## Installation
  ${installation}
  ## Usage
  ${usage}
  ## License
  This project is covered under a ${license} license. 
  ## Contributing
  ${contributing}
  ## Tests 
  ${tests}
  ## Questions
  If you have any questions about the project please find me on <a href= "https://github.com/${github}">GitHub</a> or contact me via email at ${email}.

`;
}

module.exports = generateMarkdown;
