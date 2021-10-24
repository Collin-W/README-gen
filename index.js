// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')


// An array of questions for user input
const questions = [{
        type: 'input',
        name: 'name',
        message: 'What is title of your projects README file?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username for the questions section.'
    },
    {
        type: 'confirm',
        name: 'tableOfContents',
        message: 'Would you like to add a table of contents?',
        default: false
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description'
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter your URL to the live project.'
    },
    {
        type: 'input',
        name: 'features',
        message: 'Features'
    },
    {
        type: 'checkbox',
        name: 'technologies',
        message: 'Built With',
        choices: ['JavaScript', 'HTML', 'CSS', 'jQuery', 'Bootstrap', 'Node', 'ES6']
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter a usage description.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions.'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Enter names of project contributors.'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Would you like to include any of the following license?',
        choices: [
            //[![](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)]()
            {
                name: 'MIT',
                value: `[![MIT](https://img.shields.io/badge/MIT-License-green.svg)](https://opensource.org/licenses/MIT)`
            },
            
            {
                name: 'Apache',
                value: `[![Apache-2.0](https://img.shields.io/badge/Apache-License-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
            },

            {
                name: 'Eclipse',
                value: `[![Eclipse-2.0](https://img.shields.io/badge/Eclipse-License-black.svg)](https://opensource.org/licenses/EPL-2.0)`
            }
        ]
    }

]
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(data => {
            //console.log(data)
            fs.writeFile('README.md', generateMarkdown(data), function (err) {

                if (err) {
                    return console.log(err);
                }
                console.log("Success!");
            })
        })
};

// Function call to initialize app
init();