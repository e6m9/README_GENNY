const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    'please enter a title for yr project...',
    'please enter a description for yr project...',
    'please describe the installation for yr project...',
    'please describe how to use yr project...',
    'please enter the github usernames of the contributors to yr project...',
    'what kind of license does yr project have?',
    'please describe how to test yr project...',
    'please enter yr email address...'
];

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

// const writeToFile

fs.writeFileSync('./GeneratedREADME/README.md', init);
console.log('Initial README.md generated successfully');

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
            default: '',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usage',
        },
        {
            type: 'input',
            message: questions[4],
            name: 'gitName',
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
                ]
        },
        {
            type: 'input',
            message: questions[6],
            name: 'needTest',
            default: '',
        },
        {
            type: 'input',
            message: questions[7],
            name: 'email',
        },
    ])
    .then((answers) => {
        console.log('User answers:', answers);

        const generatedReadme = generateMarkdown(answers);


        if (!fs.existsSync('./GeneratedREADME')) {
            fs.mkdirSync('./GeneratedREADME');
        }

        fs.writeFileSync('./GeneratedREADME/README.md', generatedReadme);
        console.log('README.md generated successfully');
    });

