// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function renderTableOfContents(data) {
  var nav = data.tableOfContents;

  if (nav) {
return `
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
  `
}
return '';
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {

  return `

  ${renderTableOfContents(data)}

  # ${data.name}

  ## Description: 
    ${data.description}

  ## Usage:
    ${data.usage}

  ## Link: 
    ${data.link}

  ## Features:
    ${data.features}

  ## Technologies & Tools:
    ${data.technologies}
    
  ## Installation:
    ${data.installation}

  ## Contributors:
    ${data.contributors}

  ## License:
    ${data.license}

`;
}

module.exports = generateMarkdown;
