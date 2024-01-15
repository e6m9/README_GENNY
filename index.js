// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const { makeBadge, ValidationError } = require('badge-maker')
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ['please enter a title for yr project...',
'please enter a description for yr project...',
'please describe the installation for yr project...',
'please describe how to use yr project...',,
'please enter the github usernames of the contributors to yr project...',
'what kind of license does yr project have?',
'please describe how to test yr project...',
'please enter yr email address...'];
   
    // .then ((answers) => {}

// generate sections before populating with answers
generateMarkdown();

inquirer
    .prompt([
        {
            type: 'input',
            message: 'please enter a title for yr project...',
            name: 'title',
        },
        {   
            type: 'input',
            message: 'please enter a description of yr project...',
            name: 'description',
        },
        {
            type: 'input',
            message: 'please describe the installation for yr project...',
            name: 'needInstall',
            default: '',
        },
        {
            type: 'input',
            message: 'please describe how to use yr project...',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'please enter the github usernames of the contributors to yr project...',
            name: 'gitName',
        },
        {
            type: 'list',
            message: 'what kind of license does yr project have?',
            name: 'license',
            choices: ['MIT License',
            'Apache License 2.0',
            'Boost Software License 1.0',
            'BSD 3-Clause "New" or "Revised" License',
            'BSD 2-Clause "Simplified" License',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU General Public License v3.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense',
            'No License',]
        },
        {
            type: 'input',
            message: 'please describe how to test yr project...',
            name: 'needTest',
            default: '',
        },
        {
            type: 'input',
            message: 'please enter yr email address...',
            name: 'email',
        },
    ])
// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {

}

// TODO: Create a function to initialize app
function init() {}
const init = generateMarkdown({
    title: '',
    description: '',
    install: '',
    usage: '',
    license: '',
    contribute: '',
    tests: '',
    questions: '',
  });

  if (!fs.existsSync('./GeneratedREADME')) {
    fs.mkdirSync('./GeneratedREADME');
  }

  writeToFile('./GeneratedREADME/README.md', initialTemplate);

// Function call to initialize app
init();


