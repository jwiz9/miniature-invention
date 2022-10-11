// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { generateMarkdown } = require('./utils/generateMarkdown');
const licenseInfo = require('./utils/license').licenseInfo;

// An array of questions for user input
const questions = [

    {
        name: 'title',
        message: 'Enter the title of your README:'
    },
    {
        name: 'description',
        message: 'Enter the description of your README:',
    },
    {
        name: 'installation',
        message: 'Enter installation information HERE:'
    },
    {
        name: 'usage',
        message: 'Enter usage information HERE'
    },
    {
        name: 'contributions',
        message: 'Enter contributers to your project HERE:'
    },
    {
        name: 'tests',
        message: 'Enter tests information HERE:'
    },
    {
        name: 'githubName',
        message: 'Enter JUST your GitHub username:'
    },
    {
        name: 'email',
        message: 'Enter your FULL email:'
    },
    {
        type: 'list',
        name: 'licenseType',
        message: 'Press up or down to scroll through different licenses:',
        choices: licenseInfo,
    },
];

// A function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log('README has been generated in \'README.md\' file');
    });
}

// A function to initialize app
const init = () => {
    inquirer
        .prompt(questions) // prompt the user with readme questions
        .then(readmeData => generateMarkdown(readmeData))
        .then(markdownData => writeToFile('README.md', markdownData))
}

// Function call to initialize app
init();