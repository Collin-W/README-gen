function renderTableOfContents(data) {
  var nav = data.tableOfContents;

  if (nav) {
return `
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
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