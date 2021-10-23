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

  ## Contributor(s):
    ${data.contributors}

  ## Questions? Contact me!:
  https://github.com/${data.github}

  ## License:
    ${data.license}

`;
}

module.exports = generateMarkdown;



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if (license) {
  //   return `
  //   https://img.shields.io/badge/${license}-License-green
  //   `
  //}
  }
  //renderLicenseBadge('MIT')
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    // return `
    // [![MIT License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/MIT)
    // `
    //${license}
    //https://img.shields.io/badge/License-GPL%20v3-yellow.svg
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {}