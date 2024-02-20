//imports inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');

//imports the util
const generateMarkdown = require('./utils/generateMarkdown');

//sets questions to a variable in an array
const questions = [
    'please enter a title for yr project...',
    'please enter a description for yr project...',
    'please describe the installation for yr project...',
    'please describe how to use yr project...',
    'please list the packages and technologies you used for this...',
    'what kind of license does yr project have?',
    'please describe how to test yr project...',
    'please enter yr github username...',
    'please enter yr email address...',
];

//grabs the initialized markdown from the util
const init = generateMarkdown({
    title: '',
    description: '',
    install: '',
    usage: '',
    tests: '',
    license: '',
    acknowledge: '',
    developmemt: '',
    contact: '',
    finalthoughts: '',
  });

//writes a folder to hold the generated readme if it doesn't already exist
if (!fs.existsSync('./GeneratedREADME')) {
    fs.mkdirSync('./GeneratedREADME');
}

//writes an initialized readme file in the above folder and displays a message on success
fs.writeFileSync('./GeneratedREADME/README.md', init);
console.log('Initial README.md generated successfully');

//collects user data by pulling the questions from the array in order and giving them a variable name
inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'needInstall',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usage',
        },
        {
            type: 'input',
            message: questions[4],
            name: 'tech',
        },
        {
            type: 'list',
            message: questions[5],
            name: 'license',
            choices:
                ['MIT License',
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
                    'No License',
                ],
                default: '',
        },
        {
            type: 'input',
            message: questions[6],
            name: 'test',
        },
        {
            type: 'input',
            message: questions[7],
            name: 'gitName',
        },
        {
            type: 'input',
            message: questions[8],
            name: 'email',
        }
    ])
    
    //shows user their answers
    .then((answers) => {
        console.log('User answers:', answers);

        //fills the readme file with user answers
        const generatedReadme = generateMarkdown(answers);

        //checks if a readme file exists so a previous one won't be overwritten
        if (!fs.existsSync('./GeneratedREADME')) {
            fs.mkdirSync('./GeneratedREADME');
        }

        //writes the final generated readme and logs that it was done so successfully
        fs.writeFileSync('./GeneratedREADME/README.md', generatedReadme);
        console.log('README.md generated successfully');
    });