// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMark = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// start with table of contents, run an if on i[0] to check for yes or no
inquirer
    .prompt([
        {
            type: 'list',
            message: 'what kind of license does yr project have',
            name: 'license',
            default: false,
        },
        {
            type: 'confirm',
            message: 'does yr project need installation instructions? (y/n)',
            name: 'needInstall',
            default: false,
        },
        {
            type: 'confirm',
            message: 'does yr project need testing instructions? (y/n)',
            name: 'needTest',
            default: false,
        },
        {
            type: 'input',
            message: 'what is the title of yr project?',
            name: 'title',
        },
        {   
            type: 'input',
            message: 'please enter a description of yr project...',
            name: 'description',
        },
        {
            type: 'input',
            message: 'please describe the usage of yr project...',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'please enter the github usernames of the contributors to yr project...',
            name: 'gitName',
        },
        {
            type: 'input',
            message: 'please enter yr email address...',
            name: 'email',
    },
    ])
    
    // .then ((answers) => {}

    // 'please describe the installation of yr project...',
    // 'please enter the type of license for yr project from the following options...',
    // 'please enter the test instructions for yr project...',
    // gitName and email go into questions section

// generate sections before populating with answers

// TODO: Create a function to initialize app
function init() { }
// const init = 

// Function call to initialize app
init();
