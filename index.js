// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
// const questions = [

const questions = [{


    
        type: 'input',
        name: 'name',
        message: 'What is title of your projects README file?'
    },
    {
        type: 'confirm',
        name: 'tableOfContents',
        message: 'Would you like to add a table of contents?',
        default: false
    },
    // {
    //     type: 'input',
    //     name: 'nav',
    //     when: ({ tableOfContents }) => tableOfContents
    // },
    {
        type: 'input',
        name: 'description',
        message: 'Description'
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter your URL to the live project'
    },
    {
        type: 'input',
        name: 'features',
        message: 'Features'
    },
    {
        type: 'checkbox',
        name: 'technologies',
        message: 'Technologies Used',
        choices: ['JavaScript', 'HTML', 'CSS', 'jQuery', 'Bootstrap', 'Node', 'ES6']
    },
    {
        type: 'confirm',
        name: 'usage',
        message: 'Usage',
        default: 'Would you like to include a usage description?'
    },
    {
        type: 'confirm',
        name: 'installation',
        message: 'Would you like to include installation instructions?',
        default: false
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Contributors '
    },
    {
        type: 'input',
        name: 'license',
        message: 'License'
    }

]

// {
//     type: '',
//     name: '',
//     message: ''
// }


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

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
}

// Function call to initialize app
init();