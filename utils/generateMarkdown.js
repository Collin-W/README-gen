// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.name}
`;
if (data.nav === true) {
  return `
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
  `
};

return `
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
